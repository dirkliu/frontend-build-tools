function bindEvent(dom,type,callback){
    if(dom.addEventListener){
        dom.addEventListener(type,callback,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,callback);
    }else{
        dom['on'+type]=callback;
    }
}