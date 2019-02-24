import { clrValue, clrExpected } from './helpers';
import { gender, EGenderFormat } from "../src/gender";

describe('[Gender]', () => {

    const testValue1 = gender();
    test(`Should return ${clrExpected('Male or Female')} [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^Male|Female$/);
    });

    const testValue2 = gender({ format: EGenderFormat.SHORT_LOWER });
    test(`Should return ${clrExpected('m or f')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^m|f$/);
    });

    const testValue3 = gender({ format: EGenderFormat.SHORT_UPPER });
    test(`Should return ${clrExpected('M or F')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^M|F$/);
    });

    const testValue4 = gender({ format: EGenderFormat.FULL });
    test(`Should return ${clrExpected('Male or Female')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^Male|Female$/);
    });
});