class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }


    guess() {
        this.guessingNumber = Math.round((this.min + this.max) / 2);
        console.log("Guess number is: " + this.guessingNumber)
        return this.guessingNumber
        // if (this.guessingNumber == this.number) {
        //     console.log("You won!")
        //     return this.guessingNumber;}
        // else if (this.guessingNumber > this.number) {
        //     console.log("The number should be lower")
        // }
        // else if (this.guessingNumber < this.number) {
        //     console.log("The number should be greater")
        // }
    }


    lower() {
        this.max = this.guessingNumber;
        console.log("Now max is: " + this.max)
    }


    greater() {
        this.min = this.guessingNumber;
        console.log("Now min is: " + this.min)
    }
}

module.exports = GuessingGame;


