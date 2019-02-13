import { ALPHAS } from '../src/common';
import { clrExpected, clrValue } from './helpers';

import { randomAlphabet, randomAlphaNum, randomDate } from '../src/random';

describe('[Random]', () => {
    describe('randomAlphabet()', () => {
        const randomAlphabet0 = randomAlphabet();
        test(`Returns random ${clrExpected('Alphabet')} [ ${clrValue(randomAlphabet0)} ]`, () => {
            expect(ALPHAS.toLowerCase().indexOf(randomAlphabet0)).toBeGreaterThanOrEqual(0);
        });
    });

    describe('randomAlphaNum(\'aAAxxaaX\')', () => {
        const randomAlphaNum0 = randomAlphaNum('aAAxxaaX');
        test(`Returns random string in ${clrExpected('aAAxxaaX')} format [ ${clrValue(randomAlphaNum0)} ]`, () => {
            expect(randomAlphaNum0).toMatch(/^[a-z][A-Z]{2}\d{2}[a-z]{2}X$/);
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