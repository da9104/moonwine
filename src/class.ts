class Player {
    readonly first: string; 
    last: string;
    #score: number = 0;
    // public private
    numLives = 10;
    constructor(first: string, last: string) {
        console.log("in contructor")
        this.first = first;
        this.last = last;
    }
    get fullName(): string {
        return `${this.first} ${this.last}`
    }
    taunt() {
        console.log("taunt!!!")
    }
    loseLife() {
        this.numLives -= 1
    }
}

const player1 = new Player("dami", "kang")
player1.taunt()
player1.loseLife()


console.log(player1.first)
console.log(player1.fullName)


abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
    greet() {
        console.log("hello")
    }
}



