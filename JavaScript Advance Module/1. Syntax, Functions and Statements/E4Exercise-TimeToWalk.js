function calculateTimeToWalk(stepsCount, stepDistance, speed) {

    let distance = stepsCount * stepDistance; // meters traveled
    let restMinutes = Math.trunc(distance / 500) * 60;
    let speedMps = speed / 3.6;
    let timeWalking = ((distance )/ speedMps) +restMinutes;

    let hours = Math.trunc(timeWalking / 3600);
    let minutes = Math.trunc((timeWalking % 3600) / 60);
    let seconds = Math.round (timeWalking % 60);
    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds}`);

    // var measuredTime = new Date(null);
    // measuredTime.setSeconds(timeWalking+restMinutes); // specify value of SECONDS
    // var MHSTime = measuredTime.toISOString().substr(11, 8);
    // console.log(MHSTime);

}

calculateTimeToWalk(4000, 0.60, 5);
calculateTimeToWalk(2564, 0.70, 5.5);