function solution() {
    let internalString = "";

    return {

        append: function (string) {
            internalString+=string;
        },

        removeStart:  (n)=>{
          internalString = internalString.substring(n);

        },

        removeEnd: (n)=> {internalString= internalString.substring(0, internalString.length-n)},

        print:()=> console.log(internalString)
    }


}

/*function removeEnd(n){
    this.internalStirng = this.internalStirng.substring(-n);
}*/


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
