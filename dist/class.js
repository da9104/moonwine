var _Player_score;
class Player {
    constructor(first, last) {
        _Player_score.set(this, 0);
        // public private
        this.numLives = 10;
        console.log("in contructor");
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    taunt() {
        console.log("taunt!!!");
    }
    loseLife() {
        this.numLives -= 1;
    }
}
_Player_score = new WeakMap();
const player1 = new Player("dami", "kang");
player1.taunt();
player1.loseLife();
console.log(player1.first);
console.log(player1.fullName);
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("hello");
    }
}
