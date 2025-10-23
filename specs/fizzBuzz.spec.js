import { describe, it, expect } from 'vitest';
import {fizzBuzzer} from '../src/main.js';

describe('fizzbuzz', () => {
    it('quand input 1 egale 1 ', () => {
        expect(fizzBuzzer(1)).toBe("1")
    });
})
