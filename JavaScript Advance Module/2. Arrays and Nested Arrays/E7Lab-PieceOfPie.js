function solve(array, firstParam, secondParam){
    let startIndex = array.indexOf(firstParam);
    let endIndex = array.lastIndexOf(secondParam)+1;

    return array.slice(startIndex, endIndex);

}