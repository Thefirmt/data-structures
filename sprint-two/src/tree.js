var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  // newTree.parent = null
  
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create an instance of a new tree
  var node = Tree(value)
  // node.parent = this
  //add the child to children of previous tree
  this.children.push(node)
  //add value to new node
};

treeMethods.contains = function(target) {
  //create a function that takes in a obj
  var innerFunc = function (node) {
    // we check if this.value is equal to target
    if (node.value === target) {
      return true;
      // if it is retuen true 
  } else if (node.children.length === 0) {
    return false;
  }
  for (var i = 0; i < node.children.length; ++i) {
    // loop though this.children array
      // return call of this.children indexed element
      if (innerFunc(node.children[i])) {
        return true
      }
    }
  
  return false
    // if it doesn't return false 
  };
  // outside of the inner function 
  return innerFunc(this);
  // return call of inner function with this as argumnet
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
