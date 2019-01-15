import { clrValue, clrExpected } from './helpers';
import { gender } from "../src/gender";

describe('[Gender]', () => {

    const testValue1 = gender();
    test(`Should return ${clrExpected('Male or Female')} [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^Male|Female$/);
    });

    const testValue2 = gender({ formats: [{ value: 'mf' }] });
    test(`Should return ${clrExpected('m or f')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^m|f$/);
    });

    const testValue3 = gender({ formats: [{ value: 'MF' }] });
    test(`Should return ${clrExpected('M or F')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^M|F$/);
    });

    const testValue4 = gender({ formats: [{ value: 'malefemale' }] });
    test(`Should return ${clrExpected('Male or Female')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^Male|Female$/);
    });
});