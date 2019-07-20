var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]){
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] === item;
};

setPrototype.remove = function(item) {
  if (this._storage[item]){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
