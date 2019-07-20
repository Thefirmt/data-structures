

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get index
  var found = this._storage.get(index)
  //we check if var exists
  if(found === undefined) {
    // if it's undefined
    // make an var with nested [[k,v]] // array with key value pair of given arguments within an array [[k,v]]
    // set the index's value as the array
    var tuple = [[k,v]]
    this._storage.set(index, tuple);
  } else {
    //var value = found.push([k,v])
    for (var i = 0; i < found.length; i++){
      if(found[i][0] === k){
        found[i][1] = v
        break;
      }
    found.push([k,v])
    } 
  }
  //else 
    // if it is not undefined
    // push into the outer array [k,v]
    // set the inde'x value as the new fixed array
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = this._storage.get(index)
  console.log(found)
  // loop through the arry
  for (var i = 0; i < found.length; i++) {
    //look for the key at arr[0]
    if (found[i][0] === k) {
      //if found
       //return the value at arr[1]
       return found[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = this._storage.get(index)
  for (var i =0; i < found.length; i++){
    if(found[i][0] === k){
     found.splice(i,1)
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


