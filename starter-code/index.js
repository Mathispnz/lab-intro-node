class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort( (a, b) => {
     
        return a - b;
      
    })
  }
  get(pos) {
   return this.items[pos-1];
  }


  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else { 
      return Math.max(...this.items);
    }
  }


  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else { 
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } 
    else { 
      return this.items.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0) 
  }
  }
  
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } 
    else {
      return (this.sum() / this.length);
    }
  }
  
};

module.exports = SortedList;


