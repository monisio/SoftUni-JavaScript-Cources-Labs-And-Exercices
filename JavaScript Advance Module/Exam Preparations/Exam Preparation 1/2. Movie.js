class Movie {
    "use strict"

    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.ticketsCount = 0;
    }

    newScreening(date, hall, description) {
        let newScr = {
            date: date,
            hall: hall,
            description: description
        }

        let available = this.screenings.filter(e =>
            e.date === date && e.hall === hall
        );
        if (available.length !== 0) {
            throw  new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        this.screenings.push(newScr);
        return `New screening of ${this.movieName} is added.`;

    }


    endScreening(date, hall, soldTickets) {
        let screening = this.screenings.filter(e => e.date === date && e.hall === hall)

        if (screening.length === 0) {
            throw  new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }

        this.ticketsCount += Number(soldTickets)
        let currentProfit = Number(this.ticketPrice) * Number(soldTickets);
        this.totalProfit += currentProfit;
        this.screenings.splice(this.screenings.indexOf(screening[0]), 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;

    }

    toString() {
        let result = [];

        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.ticketsCount}`);
        if (this.screenings.length > 0) {
            result.push("Remaining film screenings:");
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall)).forEach(s => result.push(`${s.hall} - ${s.date} - ${s.description}`))
        } else {
            result.push("No more screenings!");
        }
        return result.join("\n");

    }


}

