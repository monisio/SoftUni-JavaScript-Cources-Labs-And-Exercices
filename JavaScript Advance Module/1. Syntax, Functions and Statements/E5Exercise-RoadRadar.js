function solve(speed, areaType) {
    let output = '';

    switch (areaType) {

        case 'residential': output = getLimitSpeedMessage(20, speed); break;
        case 'city': output = getLimitSpeedMessage(50, speed); break;
        case 'motorway': output = getLimitSpeedMessage(130, speed); break;
        case 'interstate': output = getLimitSpeedMessage(90, speed); break;

    }


    console.log(output);

    function getLimitSpeedMessage(speedLimit, currentSpeed) {
        let message = '';

        if (currentSpeed <= speedLimit) {
            message = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`
        } else {
            let speedOverLimit = currentSpeed - speedLimit;
            let speedingMessage = '';

            if (speedOverLimit <= 20) {
                speedingMessage = 'speeding';
            } else if (speedOverLimit > 20 && speedOverLimit <= 40) {
                speedingMessage = 'excessive speeding'
            } else {
                speedingMessage = 'reckless driving'
            }

            message = `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedingMessage}`

        }

        return message;
    }

   
}
solve(21, 'residential');