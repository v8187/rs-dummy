import { clrValue, clrExpected } from './helpers';
import { color, EColorFormat } from "../src/color";

describe('[Color]', () => {

    const testValue1 = color();
    test(`Should return ${clrExpected('Color name')} by default [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^[a-zA-Z\s\(\)]+$/);
    });

    const testValue2 = color({ format: EColorFormat.HEX_CODE });
    test(`Should return ${clrExpected('Hex code format')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^#[a-f\d]{6}$/i);
    });

    const testValue3 = color({ format: EColorFormat.RGB_NUMERIC });
    test(`Should return ${clrExpected('rgb(x, x, x) format')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^rgb\(((, )?\d+(\.\d+)?){3}\)$/);
    });

    const testValue4 = color({ format: EColorFormat.RGB_PERCENT });
    test(`Should return ${clrExpected('rgb(x%, x%, x%) format')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^rgb\(((, )?\d+(\.]d+)?%){3}\)$/);
    });
});