function factory(input){
    let obj ={};
    for (let i = 0; i <input.length-1 ; i+=2) {
        obj[input[i]] = Number(input[i+1]);
        
    }
    console.log(obj);
}

factory(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);