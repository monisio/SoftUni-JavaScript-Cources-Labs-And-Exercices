function solve(words) {

    let matcher = words.toUpperCase().match(/\w+/g);



    console.log(matcher.join(", "));



}

solve('Hi, how are you?');