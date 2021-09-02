function solve(inputArr){

    inputArr.sort((a,b)=> a.localeCompare(b));

    inputArr.forEach((val,i)=> console.log('%d.%s',i+1,val));

}
solve(["John", "Bob", "Christina", "Ema"]);