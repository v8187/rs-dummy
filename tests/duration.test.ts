import { clrCondition, clrExpected, clrValue } from './helpers';
import { genDuration } from '../src/duration';
import { deepMergeObject } from '@v8187/rs-utils';

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

describe('[Generators]:duration', () => {

    const testValue1 = genDuration(mockOptions());
    // test(`Returns ${clrExpected('N Days')} with ${clrCondition('default configuration')}`, () => {
    test(`Should be in ${clrExpected('"XDays"')} format [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^\d+Days$/);
    });

    const testValue2 = genDuration(mockOptions({ days: { min: 5, max: 10, sufix: ' d', prefix: 'Only' } }));
    // test(`Returns ${clrExpected('Only N days')} with ${clrCondition('custom config')}`, () => {
    test(`Should be in ${clrExpected('Only X d')} format [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^Only \d+ d$/);
    });

    const testValue3 = genDuration(mockOptions({
        months: { min: 1, max: 1, selected: true, prefix: 'Only', sufix: ' months and ' },
        days: { min: 5, max: 10, sufix: ' days left', prefix: '' }
    }));
    // test(`Returns ${clrExpected('Only 1 months and N days left')} with ${clrCondition('custom config')}`, () => {
    test(`Should be in ${clrExpected('Only 1 months and X days left')} format [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^Only 1 months and \d+ days left$/);
    });

    const testValue4 = genDuration(mockOptions({
        hours: { selected: true, sufix: 'h' },
        minutes: { selected: true, sufix: 'm' },
        seconds: { selected: true, sufix: 's' },
        days: { selected: false },
        sufix: 'remaining.'
    }));
    // test(`Returns ${clrExpected('Nh Nm Ns remaining')} with ${clrCondition('custom config')}`, () => {
    test(`Should be in ${clrExpected('Xh Xm Xs remaining.')} format [ ${clrValue(testValue4)} ]`, () => {
        expect(testValue4).toMatch(/^\d+h \d+m \d+s remaining.$/);
    });
});