class SummerCamp {


    constructor(organizer, location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }


    registerParticipant(name, condition, money) {
        let priceToStay = this.priceForTheCamp[condition];

        if (priceToStay === undefined) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (priceToStay > Number(money)) {
            return `The money is not enough to pay the stay at the camp.`
        }


        let newParticipant = {
            name,
            condition,
            power: 100,
            wins: 0,
        }

        this.listOfParticipants.push(newParticipant);

        return `The ${name} was successfully registered.`

    }


    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(e => e.name === name);

        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1);


        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let participantA = this.listOfParticipants.find(p => p.name === participant1);

        if (typeOfGame === "WaterBalloonFights") {
            let participantB = this.listOfParticipants.find(p => p.name === participant2);
            if (!participantA || !participantB) {
                throw new Error(`Invalid entered name/s.`)
            }

            if (participantA.condition !== participantB.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if( participantA.power === participantB.power){
                return `There is no winner.`
            }else{
                let arr = []
                arr.push(participantA)
                arr.push(participantB)
                let winner = arr.sort((a,b) => b.power - a.power)[0];
                winner.wins++;

                return  `The ${winner.name} is winner in the game ${typeOfGame}.`

            }

        } else if (typeOfGame === "Battleship") {
            if (!participantA) {
                throw new Error(`Invalid entered name/s.`)
            }
            participantA.power += 20;

            return `The ${participantA.name} successfully completed the game ${typeOfGame}.`

        }


    }

    toString() {
        let result = [];

       result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
       this.listOfParticipants.sort((a,b)=> b.wins-a.wins).forEach(p=> result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`))

        return result.join("\n");

    }

}