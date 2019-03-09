import { ALPHAS } from '../src/static/common';
import { clrExpected, clrValue } from './helpers';

import { randomAlphabet, randomDate, randomWords } from '../src/random';

describe('[Random]', () => {
    describe('randomAlphabet()', () => {
        const randomAlphabet0 = randomAlphabet();
        test(`Returns random ${clrExpected('Alphabet')} [ ${clrValue(randomAlphabet0)} ]`, () => {
            expect(ALPHAS.toLowerCase().indexOf(randomAlphabet0)).toBeGreaterThanOrEqual(0);
        });
    });

    describe('randomWords()', () => {
        const testValue1 = randomWords();
        test(`Returns random ${clrExpected('1 word')} by default [ ${clrValue(testValue1)} ]`, () => {
            expect(testValue1).toMatch(/^[^\s]+$/);
        });

        const testValue2 = randomWords(2, 4);
        test(`Returns random ${clrExpected('2-4 word')} [ ${clrValue(testValue2)} ]`, () => {
            expect(testValue2).toMatch(/^[^\s]+(\s[^\s]+){1,3}$/);
        });
    });

    describe('randomDate(dateA, dateB)', () => {
        const date1 = new Date(2019, 4, 12),
            date1Time = date1.getTime(),
            date2 = new Date(2018, 11, 31),
            date2Time = date2.getTime(),
            randDate = randomDate(date1, date2).getTime();
        test(`Returns random Date between ${clrExpected(`${date1.toISOString()} & ${date2.toISOString()}`)} [ ${clrValue(new Date(randDate).toISOString())} ]`, () => {
            expect((randDate >= date1Time && randDate <= date2Time) ||
                randDate >= date2Time && randDate <= date1Time).toBeTruthy();
        });
    });
});