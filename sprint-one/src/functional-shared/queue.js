var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var objArr = Object.entries(this.storage);
  for (var i = 0; i < objArr.length; i++){
    this.storage[i + 1] = objArr[i][1];
  }
  var num = objArr.length + 1;
  this.storage[num] = value;

};

queueMethods.dequeue = function() {
  var objArr = Object.entries(this.storage);
  if (objArr.length !== 0) {
    delete this.storage[objArr[0][0]];
    return objArr[0][1];
  }
};

queueMethods.size = function() {
  var objArr = Object.entries(this.storage);
  return objArr.length;
};


