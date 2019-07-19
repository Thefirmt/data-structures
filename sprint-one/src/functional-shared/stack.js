var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var objArr = Object.entries(this.storage);
  for (var i = 0; i < objArr.length; i++) {
    this.storage[i + 1] = objArr[i][1];
  }
  var num = objArr.length + 1;
  this.storage[num] = value;

};

stackMethods.pop = function() {
  var objArr = Object.entries(this.storage);
  if (objArr.length !== 0) {
    delete this.storage[objArr[objArr.length - 1][0]];
    return objArr[objArr.length - 1][1];
  }

};

stackMethods.size = function() {
  var objArr = Object.entries(this.storage);
  return objArr.length;
};


