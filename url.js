var endpoint="";

function urlinput(){
    var url=document.getElementById("linkinput").value;
    var checker= url.startsWith("http://")||url.startsWith("https://");
    if(!checker){
        output ="http://"+url;
        return output;
    }
    else{
        return url;
    }
}
function random() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function makehash(){
    if(window.location.hash==""){
        window.location.hash=random();
    }
}
function sendtojson(url){
    this.url=url;
    $ajax({
        'url':endpoint+"/"+window.location.hash.substr(1),
        'type':'POST',
        'data': JSON.stringify(this.url),
        'datatype':'json',
        'contentType':'application/json; charset=utf-8'
    })
}
function urlshortener(){
    var oriurl=urlinput();
    makehash();
    sendtojson(oriurl);
}
var hashtag= window.location.hash.substr(1)
if( window.location.hash!=""){
    $.getJSON(endpoint+"/"+hastag, function (data){
        data=data["result"];
        if(data!=NULL){
            window.location.href=data;
        }
    });
}


