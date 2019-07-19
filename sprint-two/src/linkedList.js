var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    //-> call new node
    var node1 = new Node(value);
    //set a head if null
    if(list.head === null) {
      list.head = node1;
    };
    //link current tail node to new node
    if (list.tail === null) {
      list.tail = node1
      list.tail.next = node1;
    } else {
      list.tail.next = node1;
    };
    //update tail pointer to latest
    list.tail = node1;
    // console.log('tail: ' + list.tail + ' head: '+ list.head)
    // console.log(node1);
  };

  list.removeHead = function() {
    //update head pointer to point to next of current head
    var deleted = list.head.value;
    list.head = list.head.next;
    return deleted;
  };

  list.contains = function(target) {
    
    var innerContains = function (node){
      if (node.value === target){
        return true;
      }
      if (node.next !== null ){
        console.log('burritos')
        return innerContains(node.next)
      } 
        return false;
    };
    
    
    return innerContains(list.head)
  };
  //   var node = list.head;
  //   while (node !== list.tail) {
  //     if (node.value === target) {
  //       return true;
  //     } else {
  //       node = node.next;
  //     }
  //   }
  //   return false;
  // };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
