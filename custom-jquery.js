
cJQuery= 
    function (selector)
{
    console.log("selectot :" + selector + " | " + (typeof selector == 'string'));
    if(typeof selector == 'string')
        return document.getElementsByClassName(selector);

    return selector;
}
window.$ = cJQuery;

Object.prototype.each = function (fun) {  
    for (var i = 0; i < this.length; i++) {
        var obj = this[i];
        fun.call(obj, i);
    }
    return this;
};


Object.prototype.addClass = function (className) {
    for (i = 0; i < this.length; i++) {
        this[i].className += (" "+ className);
    }    
    return this;
};

Object.prototype.html = function (html) {
    console.log("run: " + this);    
    if (typeof this.length == 'undefined') {
        this.innerHTML = html;
    }    
    for (i = 0; i < this.length; i++) {
        this[i].innerHTML = html;
    }
    return this;
};

function htmlImpl (html){
    this.innerHTML = html;
}