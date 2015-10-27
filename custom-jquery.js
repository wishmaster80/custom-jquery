
cJQuery= 
    function (selector)
{    
        if (typeof selector == 'string') {
            if (selector[0]== '.')
                return new CustomjQuery(document.getElementsByClassName(selector.substring(1)));
        }

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