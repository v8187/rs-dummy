import { clrValue, clrExpected } from './helpers';
import { genGender } from "../src/gender";

describe('[Generators]:gender', () => {

    const testValue1 = genGender();
    test(`Should return ${clrExpected('Male or Female')} [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^Male|Female$/);
    });

    const testValue2 = genGender({ formats: [{ value: 'mf' }] });
    test(`Should return ${clrExpected('m or f')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^m|f$/);
    });

    const testValue3 = genGender({ formats: [{ value: 'MF' }] });
    test(`Should return ${clrExpected('M or F')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^M|F$/);
    });

    const testValue4 = genGender({ formats: [{ value: 'malefemale' }] });
    test(`Should return ${clrExpected('Male or Female')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^Male|Female$/);
    });
});