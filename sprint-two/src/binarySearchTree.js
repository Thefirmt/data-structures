var BinarySearchTree = function(value) {
  var obj = Object.create(methods)
    obj.value = value;
    obj.left = null
    obj.right = null
    obj.currentNode;
  return obj
};

// var Node = function(value) {
//   var node = {};
//   node.value = value;
//   node.left = null
//   node.right = null

//   return node;
// };

var methods = {};
methods.insert = function (value) {
  var newNode = BinarySearchTree(value);
  var currentNode = this
  var innerFunction = function (obj) {
    // check if this.value bigger than value
    if (obj.value < newNode.value) {
      // check if this.right is null
      if (obj.right === null) {
        obj.right = newNode;
        // if is is set this .right to new node
      } else {
        innerFunction(obj.right);
        // if it isn't run function with current right node
      }
      
    } else if (obj.value > newNode.value) {
      if (obj.left === null) {
        obj.left = newNode;
      } else {
        innerFunction(obj.left);
      }
    }
   }
   innerFunction(currentNode)
};

methods.contains = function (target) {
  var currentNode = this
  var innerFunction = function (obj) {
    if(obj.value === target){
      return true
    }
    // check if this.value bigger than value
    if (obj.value < target) {
      // check if this.right is null
      if (obj.right === null) {
        return false
        // if is is set this .right to new node
      } else {
        return innerFunction(obj.right);
        // if it isn't run function with current right node
      }
      
    } else if (obj.value > target) {
      if (obj.left === null) {
        return false
      } else {
        return innerFunction(obj.left);
      }
    }
   }
   return innerFunction(currentNode)
};

methods.depthFirstLog = function (cb) {
  var currentNode = this
  var innerFunction = function (obj) {
      obj.value = cb(obj.value)
      if (obj.left !== null) {
        innerFunction(obj.left);
      }
      // check if this.right is null
      if (obj.right !== null) {
        innerFunction(obj.right);
        // if it isn't run function with current right node
      }

    
   }
   innerFunction(currentNode)
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
