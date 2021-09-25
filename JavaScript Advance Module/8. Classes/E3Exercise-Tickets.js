function result(array, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;

        }

    }

    let sort = {
        destination: function (a, b) {
            return a.destination.charAt(0).localeCompare(b.destination.charAt(0));
        },

        price: function (a, b) {
            return a.price - b.price;
        },

        status: function (a, b) {
            return a.status.localeCompare(b.status);
        }

    }


    let result = array.map(e => e.split("|")).map(e => {
        return new Ticket(e[0], Number(e[1]), e[2]);
    }).sort((a, b) => sort[sortCriteria](a, b));

    return result;


}

let resultArray = result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
console.log(resultArray)