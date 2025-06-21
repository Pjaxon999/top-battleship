import Ship from "./modules/ship"
/* eslint-disable */

// Ship class tests
describe('Testing ships of various sizes', () => {
    it('builds a ship object with a size of 3', () => {
        const ship = new Ship(3, 0);

        expect(ship.size).toBe(3);
        expect(ship.health).toBe(0);
        expect(ship.sunk).toBe(false);
    });
    it('builds ships of other sizes correctly', () => {
        const ship2 = new Ship(5, 0);

        expect(ship2.size).toBe(5);
        expect(ship2.health).toBe(0);
        expect(ship2.sunk).toBe(false);
    })
});

describe('testing hit method functionality', () => {
    it('correctly incrememnts the health of the ship when hit is called', () => {
        const hitShip = new Ship(4, 0);
        hitShip.hit();

        expect(hitShip.health).toBe(1);
    })
    it('will not perform a hit on a ship that has already been sunk', () => {
        const sunkShip = new Ship(3, 3);
        sunkShip.isSunk();
        
        expect(sunkShip.hit()).toBe("Cannot hit a sunk ship!");
    })
    it('correctly updates a ship to be in a sunk state after health = size', () => {
        const doomedShip = new Ship(3, 2);
        doomedShip.hit();

        expect(doomedShip.sunk).toBe(true)
    })
})