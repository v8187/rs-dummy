import { clrExpected, clrValue } from './helpers';
import { creditCard } from '../src/credit-card';

describe('[Credit Card]', () => {

    const testValue1 = creditCard({
        cardTypes: [{
            formats: [{ iins: [34, 37], range: { min: 15, max: 15 } }]
        }], separator: ' '
    });
    // test(`Returns ${clrExpected('15 digits')} CC # starting with ${clrExpected('34 or 37')}`, () => {
    test(`Should ${clrExpected('begins with 34/37 and 15 digits long')} [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^3(4|7)\d( \d{4}){3}$/);
    });

    const testValue2 = creditCard({
        cardTypes: [{
            formats: [{ iins: [34, 37], range: { min: 15, max: 15 } }]
        }], separator: '-'
    });
    // test(`Returns ${clrExpected('15 digits')} CC # starting with ${clrExpected('34 or 37')} and ${clrExpected('-')} `, () => {
    test(`Should ${clrExpected('begins with 34/37 and 15 digits long and with "-"')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^3(4|7)\d(\-\d{4}){3}$/);
    });

    const testValue3 = creditCard({
        cardTypes: [{
            formats: [{ iins: [62], range: { min: 16, max: 19 } }]
        }], separator: ' '
    });
    // test(`Returns ${clrExpected('16 - 19 digits')} CC # starting with ${clrExpected('62')}`, () => {
    test(`Should ${clrExpected('begins with 62 and 16-19 digits long')} [ ${clrValue(testValue3)} ]`, () => {
        expect((testValue3)).toMatch(/^6(2\d{2}|2\s\d{4}|2\d\s\d{4}|\s2\d{3})( \d{4}){3}$/);
    });

    const testValue4 = creditCard({
        cardTypes: [{
            formats: [{ iins: [{ min: 3528, max: 3589 }], range: { min: 16, max: 19 } }]
        }], separator: ' '
    });
    // test(`Returns ${clrExpected('16 - 19 digits')} CC # starting with ${clrExpected('3528 - 3589')}`, () => {
    test(`Should ${clrExpected('begins with 3528-3589 and 16-19 digits long')} [ ${clrValue(testValue4)} ]`, () => {
        expect((testValue4)).toMatch(/^3(5(2[8-9]|[3-8]\d)|\s5(2[8-9]|[3-8]\d)\d|5\s(2[8-9]|[3-8]\d)\d{2}|5(2[8-9]|2\s[8-9]|[3-8]\d|[3-8]\s\d)\d{3})( \d{4}){3}$/);
    });
});