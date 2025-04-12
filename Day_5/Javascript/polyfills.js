// Array.prototype.myMap

Array.prototype.myMap = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
  
    const result = [];
  
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
  
    return result;
  };

  

  //Array.prototype.myFilter

  Array.prototype.myFilter = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
  
    const result = [];
  
    for (let i = 0; i < this.length; i++) {
      if (i in this && callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  
    return result;
  };

  
  //Array.prototype.myReduce
  Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
  
    let accumulator = initialValue;
    let startIndex = 0;
  
    if (accumulator === undefined) {
      while (startIndex < this.length && !(startIndex in this)) {
        startIndex++;
      }
      if (startIndex >= this.length) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = this[startIndex++];
    }
  
    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
  
    return accumulator;
  };
  
