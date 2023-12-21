import {Divide, Multiply} from "./math";

describe('multiply', () => {
    it('Multiply', () => {
        const [first, second] = [12, 11];
        const result = first * second;

        expect(result).toBe(Multiply(first, second));
    })

    it('Multiply with negative', () => {
        const [first, second] = [-7, 8];
        const result = first * second;

        expect(result).toBe(Multiply(first, second));
    })
})

describe('divide', () => {
    it('Divide', () => {
        const [first, second] = [144, 12];
        const result = first / second;

        expect(result).toBe(Divide(first, second));
    })

    it('Divide with negative', () => {
        const [first, second] = [-100, 25];
        const result = first / second;

        expect(result).toBe(Divide(first, second));
    })
})