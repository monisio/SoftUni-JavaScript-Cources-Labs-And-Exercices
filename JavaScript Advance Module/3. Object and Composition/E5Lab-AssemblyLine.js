function createAssemblyLine() {
    return {

        hasClima: function (car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },
        hasAudio: function (car) {
            car.currentTrack={
                name:null,
                artist:null

            };

            car.nowPlaying= function (){
                if(currentTrack.name){
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
                }
            };

        },

        hasParktronic: function (car){
            car.checkDistance = function(distance){
                let output = null;
                if(distance<0.1){
                    output= "Beep! Beep! Beep!";
                }else if(distance>=0.1&&distance<0.25){
                    output= "Beep! Beep!";
                }else if (distance>=0.25 && distance<0.5){
                   output= "Beep!"
                }

                console.log(output);
            }
        }

    };


}


const assemblyLine = createAssemblyLine();


const myCar = {
    make: 'Toyota',
    model: 'Avensis'
}

