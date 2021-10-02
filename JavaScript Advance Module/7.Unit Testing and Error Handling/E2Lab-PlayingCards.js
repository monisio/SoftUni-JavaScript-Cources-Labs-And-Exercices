function createCard(value, suit) {

    const suits = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    };

    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let card = {};
    Object.defineProperty(card, "face", {
        faceValue:undefined,
        set(face) {
            if (!values.includes(face)) {
                throw new Error("Invalid face")
            }
            this.faceValue = face;
        },
        get() {
            return this.faceValue;
        },
        configurable: true,
        enumerable: true,
    });

    Object.defineProperty(card, "suit", {
        suitValue:undefined,
        set(suit) {
            if (!suits[suit]) {
                throw new Error("Invalid suit")
            }
           this.suitValue = suits[suit];
        },
        get() {
            return this.suitValue;
        },
        configurable: true,
        enumerable: true
    })
    card.toString= function () {
        return this.faceValue + this.suitValue;
    }
    card.face = value;
    card.suit = suit;
    // console.log(Object.getOwnPropertyDescriptors(card,"suit"))

    return card;
}

let card1 = createCard('10', 'H');

console.log(card1.toString())

