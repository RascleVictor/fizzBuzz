import { describe, it, expect } from 'vitest';
import {fizzBuzzer} from '../src/main.js';

describe('fizzbuzz', () => {
    it('quand input 1 egale 1 ', () => {
        expect(fizzBuzzer(1)).toBe("1")
    });
})

describe('fizzBuzzer', () => {
    it('quand input est un multiple de 3 egale fizz ', () => {
        expect(fizzBuzzer(3)).toBe("Fizz");
    })
})

describe('fizzBuzzer', () => {
    it('quand input est un multiple de 5 egale buzz ', () => {
        expect(fizzBuzzer(5)).toBe("Buzz");
    })
})

describe('fizzBuzzer', () => {
    it('quand est un multiple de 5 et de 3 egale fizzbuzz', () => {
        expect(fizzBuzzer(15)).toBe("FizzBuzz");
    });
})
