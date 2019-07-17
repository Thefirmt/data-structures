class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  enqueue(val){
	 var objArr = Object.entries(this.storage);
	 	for (var i = 0; i < objArr.length; i++){
	 		this.storage[i + 1] = objArr[i][1]
	 	}
	 var num = objArr.length + 1;
	 this.storage[num] = val;
  }

  dequeue(){
    var objArr = Object.entries(this.storage);
    if (objArr.length !== 0){
      delete this.storage[objArr[0][0]]
      return objArr[0][1]
    }
  }
  size(){
  	var objArr = Object.entries(this.storage);
  	return objArr.length;
  }

}

