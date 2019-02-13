import { deepMergeObject } from '@v8187/rs-utils';
import { clrExpected, clrValue } from './helpers';
import { duration } from '../src/duration';

const mockOptions = (options: any = {}) => {
    const mock = {
        decades: {
            title: 'Decades', selected: false, min: 0, max: 9, sufix: 'Decades', prefix: '', isSelectList: true
        }, years: {
            title: 'Years', selected: false, min: 0, max: 1000, sufix: 'Years', prefix: ''
        }, months: {
            title: 'Months', selected: false, min: 0, max: 11, sufix: 'Months', prefix: '', isSelectList: true
        }, weeks: {
            title: 'Weeks', selected: false, min: 0, max: 4, sufix: 'Weeks', prefix: '', isSelectList: true
        }, days: {
            title: 'Days', selected: true, min: 0, max: 29, sufix: 'Days', prefix: '', isSelectList: true
        }, hours: {
            title: 'Hours', selected: false, min: 0, max: 23, sufix: 'Hours', prefix: '', isSelectList: true
        }, minutes: {
            title: 'Minutes', selected: false, min: 0, max: 59, sufix: 'Minutes', prefix: '', isSelectList: true
        }, seconds: {
            title: 'Seconds', selected: false, min: 0, max: 59, sufix: 'Seconds', prefix: '', isSelectList: true
        }, miliseconds: {
            title: 'Miliseconds', selected: false, min: 0, max: 999, sufix: 'Miliseconds', prefix: ''
        }
    };

    return deepMergeObject(mock, options);
};

describe('[Duration]', () => {

    const testValue1 = duration(mockOptions());
    test(`Should be in ${clrExpected('"XDays"')} format [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^\d+Days$/);
    });

    const testValue2 = duration(mockOptions({ days: { min: 5, max: 10, sufix: ' d', prefix: 'Only' } }));
    test(`Should be in ${clrExpected('Only X d')} format [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^Only \d+ d$/);
    });

    const testValue3 = duration(mockOptions({
        months: { min: 1, max: 1, selected: true, prefix: 'Only', sufix: ' months and ' },
        days: { min: 5, max: 10, sufix: ' days left', prefix: '' }
    }));
    test(`Should be in ${clrExpected('Only 1 months and X days left')} format [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^Only 1 months and \d+ days left$/);
    });

    const testValue4 = duration(mockOptions({
        hours: { selected: true, sufix: 'h' },
        minutes: { selected: true, sufix: 'm' },
        seconds: { selected: true, sufix: 's' },
        days: { selected: false },
        sufix: 'remaining.'
    }));
    test(`Should be in ${clrExpected('Xh Xm Xs remaining.')} format [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^\d+h \d+m \d+s remaining.$/);
    });
});