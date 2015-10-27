
cJQuery= 
    function (selector)
{
    console.log("selectot :" + selector + " | " + (typeof selector == 'string'));
    if(typeof selector == 'string')
        return new CustomjQuery( document.getElementsByClassName(selector));

    return new CustomjQuery(selector);
}
window.$ = cJQuery;


function CustomjQuery(obj) {
    this.object = obj;
}

CustomjQuery.prototype.each = function (fun) {
    for (var i = 0; i < this.object.length; i++) {
        var obj = this.object[i];
        fun.call(obj, i);
    }
    return this;
};




CustomjQuery.prototype.addClass = function (className) {
    for (i = 0; i < this.object.length; i++) {
        this.object[i].className += (" " + className);
    }    
    return this;
};

CustomjQuery.prototype.html = function (html) {
    console.log("html run: " + this.object);
    if (typeof this.object.length == 'undefined') {
        this.object.innerHTML = html;
    }    
    for (i = 0; i < this.object.length; i++) {
        this.object[i].innerHTML = html;
    }
    return this;
};

function htmlImpl (html){
    this.innerHTML = html;
}