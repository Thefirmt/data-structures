

// Instantiate a new graph
var Graph = function(node) {
};

var NodeGraph = function() {
  var node = {};
  // node.value = value;
  node.connected = [];

  return node;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  newNode = new NodeGraph()
  this[value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  // console.log(this)
  // console.log(this.value)
  // console.log(storage)
  if(this[target]){
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // this[node].connected ;
  if (this[node].connected.length > 0 ) {
    for (var i = 0; i < this[node].connected.length; i++) {
      //console.log(i)
     //console.log(this[node].connected)
      this.removeEdge(this[node].connected[i], node)
    }
  }
  delete this[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this[fromNode]){
    for (var i = 0; i < this[fromNode].connected.length; i++){
      if(this[fromNode].connected[i] === toNode){
        return true;
      }
    }
    return false
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this[fromNode]){
    this[fromNode].connected.push(toNode);
  }
  if(this[toNode]){
    this[toNode].connected.push(fromNode);
  }
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, deadNode) {
  for (var i = 0; i < this[fromNode].connected.length; i++) {
    if (this[fromNode].connected[i] === deadNode) {
      this[fromNode].connected.splice(i, 1);
   
    }
  }
  for (var i = 0; i < this[deadNode].connected.length; i++) {
    if (this[deadNode].connected[i] === fromNode) {
      this[deadNode].connected.splice(i, 1);
   
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this){
    if(typeof this[key] !== 'function'){
      cb(key)
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


