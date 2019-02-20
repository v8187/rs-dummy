import { clrValue, clrExpected } from './helpers';
import { phoneNo } from "../src/phone-no";

describe('[Phone Number]', () => {

    const testValue1 = phoneNo({ formats: [{ value: 'xxxxxxxxxx' }] });
    test(`Should be in ${clrExpected('xxxxxxxxxx')} format [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^\d{10}$/);
    });

    const testValue2 = phoneNo({ formats: [{ value: '(xxx) xxx-xxxx' }] });
    test(`Should be in ${clrExpected('(xxx) xxx-xxxx')} format [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^\(\d{3}\) \d{3}-\d{4}$/);
    });

    const testValue3 = phoneNo({ formats: [{ value: '1-xxx-xxx-xxxx' }] });
    test(`Should be in ${clrExpected('1-xxx-xxx-xxxx')} format [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^1(-\d{3}){3}\d$/);
    });

    const testValue4 = phoneNo({ formats: [{ value: '(01xxxx) xxxxx' }] });
    test(`Should be in ${clrExpected('(01xxxx) xxxxx')} format [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^\(01\d{4}\) \d{5}$/);
    });

    const testValue5 = phoneNo({ formats: [{ value: '(01xxx) xxxxxx' }] });
    test(`Should be in ${clrExpected('(01xxx) xxxxxx')} format [ ${clrValue(testValue5)} ]`, () => {
        expect(testValue5).toMatch(/^\(01\d{3}\) \d{6}$/);
    });

    const testValue6 = phoneNo({ formats: [{ value: '(01x1) xxx xxxx' }] });
    test(`Should be in ${clrExpected('(01x1) xxx xxxx')} format [ ${clrValue(testValue6)} ]`, () => {
        expect(testValue6).toMatch(/^\(01\d1\)( \d{3}){2}\d$/);
    });

    const testValue7 = phoneNo({ formats: [{ value: '(011x) xxx xxxx' }] });
    test(`Should be in ${clrExpected('(011x) xxx xxxx')} format [ ${clrValue(testValue7)} ]`, () => {
        expect(testValue7).toMatch(/^\(011\d\)( \d{3}){2}\d$/);
    });

    const testValue8 = phoneNo({ formats: [{ value: '(02x) xxxx xxxx' }] });
    test(`Should be in ${clrExpected('(02x) xxxx xxxx')} format [ ${clrValue(testValue8)} ]`, () => {
        expect(testValue8).toMatch(/^\(02\d\)( \d{4}){2}$/);
    });

    const testValue9 = phoneNo({ formats: [{ value: '03xx xxx xxxx' }] });
    test(`Should be in ${clrExpected('03xx xxx xxxx')} format [ ${clrValue(testValue9)} ]`, () => {
        expect(testValue9).toMatch(/^03\d{2}( \d{3}){2}\d$/);
    });

    const testValue10 = phoneNo({ formats: [{ value: '055 xxxx xxxx' }] });
    test(`Should be in ${clrExpected('055 xxxx xxxx')} format [ ${clrValue(testValue10)} ]`, () => {
        expect(testValue10).toMatch(/^055( \d{4}){2}$/);
    });

    const testValue11 = phoneNo({ formats: [{ value: '056 xxxx xxxx' }] });
    test(`Should be in ${clrExpected('056 xxxx xxxx')} format [ ${clrValue(testValue11)} ]`, () => {
        expect(testValue11).toMatch(/^056( \d{4}){2}$/);
    });

    const testValue12 = phoneNo({ formats: [{ value: '070 xxxx xxxx' }] });
    test(`Should be in ${clrExpected('070 xxxx xxxx')} format [ ${clrValue(testValue12)} ]`, () => {
        expect(testValue12).toMatch(/^070( \d{4}){2}$/);
    });

    const testValue13 = phoneNo({ formats: [{ value: '07624 xxxxxx' }] });
    test(`Should be in ${clrExpected('07624 xxxxxx')} format [ ${clrValue(testValue13)} ]`, () => {
        expect(testValue13).toMatch(/^07624 \d{6}$/);
    });

    const testValue14 = phoneNo({ formats: [{ value: '076 xxxx xxxx' }] });
    test(`Should be in ${clrExpected('076 xxxx xxxx')} format [ ${clrValue(testValue14)} ]`, () => {
        expect(testValue14).toMatch(/^076( \d{4}){2}$/);
    });

    const testValue15 = phoneNo({ formats: [{ value: '07xxx xxxxxx' }] });
    test(`Should be in ${clrExpected('07xxx xxxxxx')} format [ ${clrValue(testValue15)} ]`, () => {
        expect(testValue15).toMatch(/^07\d{3} \d{6}$/);
    });

    const testValue16 = phoneNo({ formats: [{ value: '0800 xxx xxxx' }] });
    test(`Should be in ${clrExpected('0800 xxx xxxx')} format [ ${clrValue(testValue16)} ]`, () => {
        expect(testValue16).toMatch(/^0800( \d{3}){2}\d$/);
    });

    const testValue17 = phoneNo({ formats: [{ value: '08xx xxx xxxx' }] });
    test(`Should be in ${clrExpected('08xx xxx xxxx')} format [ ${clrValue(testValue17)} ]`, () => {
        expect(testValue17).toMatch(/^08\d{2}( \d{3}){2}\d$/);
    });

    const testValue18 = phoneNo({ formats: [{ value: '0xxx xxx xxxx' }] });
    test(`Should be in ${clrExpected('0xxx xxx xxxx')} format [ ${clrValue(testValue18)} ]`, () => {
        expect(testValue18).toMatch(/^0\d{3}( \d{3}){2}\d$/);
    });

    const testValue19 = phoneNo({ formats: [{ value: '(016x77) xxxx' }] });
    test(`Should be in ${clrExpected('(016x77) xxxx')} format [ ${clrValue(testValue19)} ]`, () => {
        expect(testValue19).toMatch(/^\(016\d77\) \d{4}$/);
    });

    const testValue20 = phoneNo({ formats: [{ value: '(01xxx) xxxxx' }] });
    test(`Should be in ${clrExpected('(01xxx) xxxxx')} format [ ${clrValue(testValue20)} ]`, () => {
        expect(testValue20).toMatch(/^\(01\d{3}\) \d{5}$/);
    });

    const testValue21 = phoneNo({ formats: [{ value: '0500 xxxxxx' }] });
    test(`Should be in ${clrExpected('0500 xxxxxx')} format [ ${clrValue(testValue21)} ]`, () => {
        expect(testValue21).toMatch(/^0500 \d{6}$/);
    });

    const testValue22 = phoneNo({ formats: [{ value: '0800 xxxxxx' }] });
    test(`Should be in ${clrExpected('0800 xxxxxx')} format [ ${clrValue(testValue22)} ]`, () => {
        expect(testValue22).toMatch(/^0800 \d{6}$/);
    });

    const testValue23 = phoneNo({ formats: [{ value: '0800 1111xx' }] });
    test(`Should be in ${clrExpected('0800 1111xx')} format [ ${clrValue(testValue23)} ]`, () => {
        expect(testValue23).toMatch(/^0800 1111\d\d$/);
    });

    const testValue24 = phoneNo({ formats: [{ value: '0845 46 4x' }] });
    test(`Should be in ${clrExpected('0845 46 4x')} format [ ${clrValue(testValue24)} ]`, () => {
        expect(testValue24).toMatch(/^0845 46 4\d$/);
    });

    const testValue25 = phoneNo({ formats: [{ value: '0x xx xx xx xx' }] });
    test(`Should be in ${clrExpected('0x xx xx xx xx')} format [ ${clrValue(testValue25)} ]`, () => {
        expect(testValue25).toMatch(/^0\d( \d{2}){4}$/);
    });

    const testValue26 = phoneNo({ formats: [{ value: '(0x) xxxx xxxx' }] });
    test(`Should be in ${clrExpected('(0x) xxxx xxxx')} format [ ${clrValue(testValue26)} ]`, () => {
        expect(testValue26).toMatch(/^\(0\d\)( \d{4}){2}$/);
    });

    const testValue27 = phoneNo({ formats: [{ value: '(0xx) xxxxxxxx' }] });
    test(`Should be in ${clrExpected('(0xx) xxxxxxxx')} format [ ${clrValue(testValue27)} ]`, () => {
        expect(testValue27).toMatch(/^\(0\d{2}\) \d{8}$/);
    });

    const testValue28 = phoneNo({ formats: [{ value: '(0xxx) xxxxxxxx' }] });
    test(`Should be in ${clrExpected('(0xxx) xxxxxxxx')} format [ ${clrValue(testValue28)} ]`, () => {
        expect(testValue28).toMatch(/^\(0\d{3}\) \d{8}$/);
    });

    const testValue29 = phoneNo({ formats: [{ value: '(0xxxx) xxxxxxx' }] });
    test(`Should be in ${clrExpected('(0xxxx) xxxxxxx')} format [ ${clrValue(testValue29)} ]`, () => {
        expect(testValue29).toMatch(/^\(0\d{4}\) \d{7}$/);
    });

    const testValue30 = phoneNo({ formats: [{ value: '(03xxxx) xxxxxx' }] });
    test(`Should be in ${clrExpected('(03xxxx) xxxxxx')} format [ ${clrValue(testValue30)} ]`, () => {
        expect(testValue30).toMatch(/^\(03\d{4}\) \d{6}$/);
    });

    const testValue31 = phoneNo({ formats: [{ value: '0xx-xxx-xxxx' }] });
    test(`Should be in ${clrExpected('0xx-xxx-xxxx')} format [ ${clrValue(testValue31)} ]`, () => {
        expect(testValue31).toMatch(/^0\d{2}(-\d{3}){2}\d$/);
    });

    const testValue32 = phoneNo({ formats: [{ value: '1-xxx-xxx-xxxx' }] });
    test(`Should be in ${clrExpected('1-xxx-xxx-xxxx')} format [ ${clrValue(testValue32)} ]`, () => {
        expect(testValue32).toMatch(/^1(-\d{3}){3}\d$/);
    });

    const testValue33 = phoneNo({ formats: [{ value: 'xxx-xxxx' }] });
    test(`Should be in ${clrExpected('xxx-xxxx')} format [ ${clrValue(testValue33)} ]`, () => {
        expect(testValue33).toMatch(/^\d{3}-\d{4}$/);
    });
});