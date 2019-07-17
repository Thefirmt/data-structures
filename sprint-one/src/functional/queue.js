var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    console.log(storage)
    var objArr = Object.entries(storage);
    for (var i = 0; i < objArr.length; i++){
      storage[i + 1] = objArr[i][1]
    }
    var num = objArr.length + 1;
    storage[num] = value;
  };

  someInstance.dequeue = function() {
    var objArr = Object.entries(storage);
    if (objArr.length !== 0){
      delete storage[objArr[0][0]]
      return objArr[0][1]
    }
  };

  someInstance.size = function() {
    var objArr = Object.entries(storage);
    return objArr.length;
  };

  return someInstance;
};
