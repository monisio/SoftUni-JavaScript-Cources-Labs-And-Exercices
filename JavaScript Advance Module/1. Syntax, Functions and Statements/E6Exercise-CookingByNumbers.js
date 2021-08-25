function solve(...arguments) {

    let number = Number(arguments[0]);


    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i];

        switch (element) {

            case 'chop': number/=2; break;
            case 'dice': number=Math.sqrt(number); break;
            case 'spice': number+=1; break;
            case 'bake': number*=3; break;
            case 'fillet': number*= 0.80;

        }

        console.log(number);
    }


}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');