function solve(){

  let result ={};
  for (const arg of arguments) {
    let typeName = typeof(arg);

    console.log(`${typeName}: ${arg}`);

    if(!result[typeName]){

      result[typeName]=0;
    }

    result[typeName]++;



  }

Object.entries(result)
    .sort((a,b)=> b[1]-a[1])
    .map(e=> console.log(`${e[0]} = ${e[1]}`));


}

solve( { name: 'bob'}, 3.333, 9.999)