export default class Ship {
    constructor(size, health) {
        this.size = size;
        this.health = health;
        this.sunk = false;
    }

    hit() {
        if (this.sunk === true) {
            return "Cannot hit a sunk ship!"
        }
        this.health++
        this.isSunk();
    }

    isSunk() {
        if (this.size === this.health) {
            this.sunk = true;
        }
        else return;
    }
}