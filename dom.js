(function(){
    
function DOM(stringElement) {
    this.element = document.querySelectorAll(stringElement);
}

DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, (elem) => {
        elem.addEventListener(event, callback);
    });
};

DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, (elem) => {
        elem.removeEventListener(event, callback);
    });
};

DOM.prototype.get = function get() {
    return this.element;
};

DOM.prototype.forEach = function forEach(callback) {
    return Array.prototype.forEach.call(this.element, callback);
};

DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.element, callback);
};

DOM.prototype.reduce = function reduce(callback) {
    return Array.prototype.reduce.call(this.element, callback);
};

DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.call(this.element, callback);
};

DOM.prototype.every = function every(callback) {
    return Array.prototype.every.call(this.element, callback);
};

DOM.prototype.some = function some(callback) {
    return Array.prototype.some.call(this.element, callback);
};

DOM.isArray = function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
};

DOM.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

DOM.isFunction = function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
};

DOM.isNumber = function isNumber(num) {
    return typeof num === 'number';
};

DOM.isString = function isString(str) {
    return typeof str === 'string';
};

DOM.isBoolean = function isBoolean(bool) {
    return typeof bool === 'boolean';
};

DOM.isNull = function isNull(value) {
    return Object.prototype.toString.call(value) === '[object Undefined]'
        || Object.prototype.toString.call(value) === '[object Null]';
};

window.DOM = DOM

})() 