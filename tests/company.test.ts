import { clrExpected, clrValue } from './helpers';
import { company } from '../src/company';


describe('[Company]', () => {

    const testValue1 = company();
    test(`Should return name with ${clrExpected('2 - 5 words')} by default [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1.split(' ').length + '').toMatch(/^[2-5]$/);
    });

    const testValue2 = company({ min: 3, max: 4 });
    test(`Should return name with ${clrExpected('3 - 4 words')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2.split(' ').length + '').toMatch(/^[3-4]$/);
    });

    const testValue3 = company({ min: 4, max: 4 });
    test(`Should return name with ${clrExpected('4 words')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3.split(' ')).toHaveLength(4);
    });

    const testValue4 = company({ min: 1, max: 2 });
    test(`Should return name with ${clrExpected('2 words')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4.split(' ')).toHaveLength(2);
    });

});