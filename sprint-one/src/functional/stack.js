var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var objArr = Object.entries(storage);
    for (var i = 0; i < objArr.length; i++){
      storage[i + 1] = objArr[i][1];
    }
    var num = objArr.length + 1;
    storage[num] = value;
  };

  someInstance.pop = function() {
    var objArr = Object.entries(storage);
    if (objArr.length !== 0){
      delete storage[objArr[objArr.length - 1][0]];
      return objArr[objArr.length - 1][1];
    }
  };

  someInstance.size = function() {
    var objArr = Object.entries(storage);
    return objArr.length;
  };

  return someInstance;
};
