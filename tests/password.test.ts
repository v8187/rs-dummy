import { clrExpected, clrValue } from './helpers';
import { password } from "../src/password";

describe('[Password]', () => {

    const testValue0 = password();
    test(`Should have ${clrExpected('uppercase, lowercase, digits, special chars, 6-8 chars')} by default [ ${clrValue(testValue0)} ]`, () => {
        expect(testValue0).toMatch(/^[^\s]{6,8}$/i);
    });

    const testValue1 = password({ upperCase: false, specialChar: false, min: 4, max: 6 });
    test(`Should have ${clrExpected('lowercase, digits, 4-6 chars')} [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^[a-z\d]{4,6}$/);
    });

    const testValue2 = password({ specialChar: false, min: 7, max: 7 });
    test(`Should have ${clrExpected('upper/lowercase, digits, 7 chars')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^[a-z\d]{7}$/i);
    });

    const testValue3 = password({ lowerCase: false, digit: false, specialChar: false, min: 6, max: 10 });
    test(`Should have ${clrExpected('uppercase, 6-10 chars')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^[A-Z]{6,10}$/);
    });

    const testValue4 = password({ min: 4, max: 8 });
    test(`Should have ${clrExpected('anything with 4-8 chars')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^[^\s]{4,8}$/);
    });

    const testValue5 = password({ upperCase: false, lowerCase: false, specialChar: false, min: 6, max: 6 });
    test(`Should have ${clrExpected('digits, 6 chars')} [ ${clrValue(testValue5)} ]`, () => {
        expect(testValue5).toMatch(/^\d{6}$/);
    });
});