class Sorter {
  constructor() {
    // your implementation
    this.storage=[];
    this.sortingRule = function (a,b) {
      return a-b;
    }
    
  }

  add(element) {
    // your implementation
    this.storage.push(element);
  }

  at(index) {
    // your implementation
    return this.storage[index];
  }

  get length() {
    // your implementation
    return this.storage.length;
  }

  toArray() {
    // your implementation
    return this.storage;
  }

  sort(indices) {
    // your implementation
     this.tempArray = [];
     for (let i=0; i<indices.length; i++) {
      this.tempArray[indices[i]]=this.storage[indices[i]];
      delete this.storage[indices[i]];
     }

     this.tempArray.sort(this.sortingRule);

     for (let i=0; i<this.storage.length; i++) {
       if (!this.storage[i]) {
         this.storage[i]=this.tempArray.splice(0,1)[0];;
       }
     }
     
  }

  setComparator(compareFunction) {
    // your implementation
    this.sortingRule=compareFunction;
  }
}

module.exports = Sorter;