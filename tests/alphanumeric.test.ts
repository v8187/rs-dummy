import { clrExpected, clrValue } from './helpers';
import { alphanumeric } from '../src/alphanumeric';


describe('[Alphanumeric]', () => {

    const testValue1 = alphanumeric();
    test(`Should ${clrExpected('return empty string')} by default [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^$/);
    });

    const testValue2 = alphanumeric({ format: 'aaaxxx' });
    test(`Should return string in ${clrExpected('"aaaxxx" format')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^[a-z]{3}\d{3}$/);
    });

    const testValue3 = alphanumeric({ format: 'aaaAAxxx' });
    test(`Should return string in ${clrExpected('"aaaAAxxx" format')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^[a-z]{3}[A-Z]{2}\d{3}$/);
    });
});