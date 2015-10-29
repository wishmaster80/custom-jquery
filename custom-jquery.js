
cJQuery= 
    function (selector) {       
        if (typeof selector == 'string') {
            return new CustomjQuery(document.querySelectorAll(selector));
        }

    return new CustomjQuery(selector);
}
window.$ = cJQuery;


function CustomjQuery(obj) {
    this.object = obj;
}

CustomjQuery.prototype.each = function (fun1) {  
    for (var i = 0; i < this.object.length; i++) {
        var obj = this.object[i];
        fun1.call(obj, i);
    }
    return this;
};



CustomjQuery.prototype.addClass = function (className) {
  
    this.runner(
		function (className){		
			this.className += (" " + className);
			}
		, className);

    return this;
};

CustomjQuery.prototype.html = function (html) {    

    this.runner(
		function (html){		
			this.innerHTML = html;	}	
		, html);
    return this;
};


CustomjQuery.prototype.append = function (el) {    

    this.runner(
		function (el){		
			this.appendChild(el);	}	
		, el);
    return this;
};

CustomjQuery.prototype.attr = function (tabindex) {    
    return this.getAttribute('tabindex');;
};

CustomjQuery.prototype.children = function () {    
    return this.children;
};

CustomjQuery.prototype.css = function (ruleName) {    

    this.runner(
		function (ruleName){					
		getComputedStyle(this)[ruleName];
	}	
		, ruleName);
    return this;
};

CustomjQuery.prototype.on = function (eventName, eventHandler) {    

    this.runner(
		function (ventName, eventHandler){					
		this.addEventListener(eventName, eventHandler);;
	}	
		, ventName, eventHandler);
    return this;
};



CustomjQuery.prototype.runner = function ( funx){	
	if (typeof this.object.length == 'undefined') {		
		funx.apply(this.object, Array.prototype.slice.call(arguments, 1));
	}
	else{
		for (i = 0; i < this.object.length; i++) {
		funx.apply(this.object[i], Array.prototype.slice.call(arguments, 1));
		}
	}
}