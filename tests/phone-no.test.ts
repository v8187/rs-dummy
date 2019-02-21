import { clrValue, clrExpected } from './helpers';
import { phoneNo, EPhoneStartsWith, EPhoneFormats, EPhoneSeparator } from "../src/phone-no";

describe('[Phone Number]', () => {

    const testValue1 = phoneNo();
    test(`Should ${clrExpected('starts with "+" & number without space')} by default [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^\+\d+ \d{6,11}$/);
    });

    const testValue2 = phoneNo({ isdCodeInBraces: true, startsWith: EPhoneStartsWith.ZEROS });
    test(`Should ${clrExpected('starts with "00" & ISD wrapped in ()')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^\(00\d+\) \d{6,11}$/);
    });

    const testValue3 = phoneNo({ isdCodeInBraces: true, startsWith: EPhoneStartsWith.ISD });
    test(`Should ${clrExpected('starts with ISD & ISD wrapped in ()')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^\(\d+\) \d{6,11}$/);
    });

    const testValue4 = phoneNo({ withISD: false });
    test(`Should ${clrExpected('starts without ISD code')} [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^\d{8,13}$/);
    });

    const testValue5 = phoneNo({ isdCodeInBraces: true, format: EPhoneFormats.GROUP_OF_3 });
    test(`Should ${clrExpected('ISD in () & group by 3 numbers')} [ ${clrValue(testValue5)} ]`, () => {
        expect(testValue5).toMatch(/^\(\+\d+\)( \d{3}){2,4}( \d{1,2})?$/);
    });

    const testValue6 = phoneNo({ separator: EPhoneSeparator.HYPHEN, format: EPhoneFormats.GROUP_OF_5 });
    test(`Should ${clrExpected('group by 5 numbers & with "-"')} [ ${clrValue(testValue6)} ]`, () => {
        expect(testValue6).toMatch(/^\+\d+(\-\d{5}){1,2}(\-\d{1,4})?$/);
    });
});