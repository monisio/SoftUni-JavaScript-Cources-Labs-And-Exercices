class List {

    constructor() {
        this.collection = [];
        this.size=0;
    }

    add(element) {
        this.collection.push(element);
       this.updateStatus();
        this.updateSize();
    }

    remove(index) {
        this.checkIndex(index);
        this.collection.splice(index, 1);
        this.updateStatus();
        this.updateSize();
    }

    get(index) {
        this.checkIndex(index);
        return this.collection[index];
    }

    updateSize() {
        this.size = this.collection.length;
    }
    updateStatus(){
        this.collection.sort((a, b) => a - b);
    }
    checkIndex(index) {
        if (index < 0 || index > this.collection.length - 1) {
            throw new Error("index out of bound")
        }
    }
}

/*•	add(element) - adds a new element to the collection
•	remove(index) - removes the element at position index
•	get(index) - returns the value of the element at position index
•	size - number of elements stored in the collection
*/



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(99);
console.log(list.get(1));
