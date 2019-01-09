import { ALPHAS } from '../src/common';

import {
    randomAlphabet, randomAlphaNum, randomDate,
    randomItem, randomNum
} from '../src/random';

const mockList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

describe('[Utils][Random]', () => {
    describe('randomItem(list)', () => {
        test('Returns random item from given list', () => {
            expect(mockList.indexOf(randomItem(mockList))).toBeGreaterThanOrEqual(0);
        });

        test('Returns undefined from empty list', () => {
            expect(randomItem([])).toBeUndefined();
        });
    });

    describe('randomAlphabet()', () => {
        test('Returns random Alphabet', () => {
            expect(ALPHAS.toLowerCase().indexOf(randomAlphabet())).toBeGreaterThanOrEqual(0);
        });
    });

    describe('randomNum(min, max)', () => {
        test('Returns random number between given numbers', () => {
            const randNum = randomNum(5, 20);
            expect(randNum >= 5 && randNum <= 20).toBeTruthy();
        });
    });

    describe('randomAlphaNum(\'aAAxxaaX\')', () => {
        test('Returns random string in given pattern', () => {
            expect(randomAlphaNum('aAAxxaaX')).toMatch(/^[a-z][A-Z]{2}\d{2}[a-z]{2}X$/);
        });
    });

    describe('randomDate(dateA, dateB)', () => {
        test('Returns random Date between given dates', () => {
            const date1 = new Date(2019, 4, 12),
                date1Time = date1.getTime(),
                date2 = new Date(2018, 11, 31),
                date2Time = date2.getTime(),
                randDate = randomDate(date1, date2).getTime();

            expect((randDate >= date1Time && randDate <= date2Time) ||
                randDate >= date2Time && randDate <= date1Time).toBeTruthy();
        });
    });
});