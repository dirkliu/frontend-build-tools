function postJSON(url,data,callback){
   var request=new XMLHttpRequest();
    request.open('POST',url);
    request.onreadystatechange=function(){

    }
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify(data));
}
