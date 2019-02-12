import { clrExpected, clrValue } from './helpers';
import { dateTime, DATE_SEQUENCE } from "../src/date-time";

describe('[DateTime]', () => {

    const dateTime1 = dateTime({ unixTimestampSecond: true });
    test(`Should return ${clrExpected('Unix Timestamp in Seconds')}  [ ${clrValue(dateTime1)} ]`, () => {
        expect(`${dateTime1}`).toMatch(/^\d{10}$/);
    });

    const dateTime2 = dateTime({ unixTimestampMilisecond: true });
    test(`Should return ${clrExpected('Unix Timestamp in Miliseconds')}  [ ${clrValue(dateTime2)} ]`, () => {
        expect(`${dateTime2}`).toMatch(/^\d{13}$/);
    });

    const dateTime3 = dateTime({ sqlTimestamp: true });
    test(`Should return ${clrExpected('SQL Timestamp')}  [ ${clrValue(dateTime3)} ]`, () => {
        expect(dateTime3).toMatch(/^\d{4}(-\d{2}){2}T\d{2}(:\d{2}){2}\.\d{3}Z$/);
    });

    const dateTime40 = dateTime({ variant: [{ value: 'short' }] });
    test(`Should return ${clrExpected('MM/DD/YY')} format [ ${clrValue(dateTime40)} ]`, () => {
        expect(dateTime40).toMatch(/^\d{2}(\/\d{2}){2}$/);
    });

    const dateTime41 = dateTime({ variant: [{ value: 'short' }], dateSequence: [{ value: DATE_SEQUENCE.DMY }], dateSeparator: [{ value: '.' }] });
    test(`Should return ${clrExpected('DD.MM.YY')} format [ ${clrValue(dateTime41)} ]`, () => {
        expect(dateTime41).toMatch(/^\d{2}(\.\d{2}){2}$/);
    });

    const dateTime42 = dateTime({ variant: [{ value: 'short' }], timeSeparator: [{ value: '.' }], onlyTime: true, hasTime: true });
    test(`Should return ${clrExpected('HH.MM AM')} format [ ${clrValue(dateTime42)} ]`, () => {
        expect(dateTime42).toMatch(/^\d{2}\.\d{2} (A|P)M$/);
    });

    const dateTime43 = dateTime({ variant: [{ value: 'short' }], hasTime: true, dateSequence: [{ value: DATE_SEQUENCE.YMD }], dateSeparator: [{ value: '-' }] });
    test(`Should return ${clrExpected('YY-MM-MM, HH:MM AM')} format [ ${clrValue(dateTime43)} ]`, () => {
        expect(dateTime43).toMatch(/^\d{2}(\-\d{2}){2}, \d{2}:\d{2} (A|P)M$/);
    });

    const dateTime5 = dateTime({ variant: [{ value: 'medium' }] });
    test(`Should return ${clrExpected('MMM, DD, YYYY')} format [ ${clrValue(dateTime5)} ]`, () => {
        expect(dateTime5).toMatch(/^[A-Z][a-z]{2} \d{2}, \d{4}$/);
    });

    const dateTime51 = dateTime({ variant: [{ value: 'medium' }], hasTime: true });
    test(`Should return ${clrExpected('MMM, DD, YYYY, HH:MM:SS AM')} format [ ${clrValue(dateTime51)} ]`, () => {
        expect(dateTime51).toMatch(/^[A-Z][a-z]{2} \d{2}, \d{4}, \d{2}(:\d{2}){2} (A|P)M$/);
    });

    const dateTime52 = dateTime({ variant: [{ value: 'medium' }], hasTime: true, onlyTime: true });
    test(`Should return ${clrExpected('HH:MM:SS AM')} format [ ${clrValue(dateTime52)} ]`, () => {
        expect(dateTime52).toMatch(/^\d{2}(:\d{2}){2} (A|P)M$/);
    });

    const dateTime6 = dateTime({ variant: [{ value: 'long' }] });
    test(`Should return ${clrExpected('MMMM, DD, YYYY')} format [ ${clrValue(dateTime6)} ]`, () => {
        expect(dateTime6).toMatch(/^[A-Z][a-z]{2,} \d{2}, \d{4}$/);
    });

    const dateTime61 = dateTime({ variant: [{ value: 'long' }], hasTime: true });
    test(`Should return ${clrExpected('MMMM, DD, YYYY, HH:MM:SS AM')} format [ ${clrValue(dateTime61)} ]`, () => {
        expect(dateTime61).toMatch(/^[A-Z][a-z]{2,} \d{2}, \d{4}, \d{2}(:\d{2}){2} (A|P)M$/);
    });

    const dateTime62 = dateTime({ variant: [{ value: 'long' }], hasTime: true, onlyTime: true });
    test(`Should return ${clrExpected('HH:MM:SS AM')} format [ ${clrValue(dateTime62)} ]`, () => {
        expect(dateTime62).toMatch(/^\d{2}(:\d{2}){2} (A|P)M$/);
    });

    const dateTime7 = dateTime({ variant: [{ value: 'full' }] });
    test(`Should return ${clrExpected('dddd, MMMM, DD, YYYY')} format [ ${clrValue(dateTime7)} ]`, () => {
        expect(dateTime7).toMatch(/^[A-Z][a-z]{2,}, [A-Z][a-z]{2,} \d{2}, \d{4}$/);
    });

    const dateTime71 = dateTime({ variant: [{ value: 'full' }], hasTime: true });
    test(`Should return ${clrExpected('dddd, MMMM, DD, YYYY, HH:MM:SS AM Timezone')} format [ ${clrValue(dateTime71)} ]`, () => {
        expect(dateTime71).toMatch(/^[A-Z][a-z]{2,}, [A-Z][a-z]{2,} \d{2}, \d{4}, \d{2}(:\d{2}){2} (A|P)M [A-Z]{3}\+\d{2}:\d{2}$/);
    });

    const dateTime72 = dateTime({ variant: [{ value: 'full' }], hasTime: true, onlyTime: true });
    test(`Should return ${clrExpected('HH:MM:SS AM Timezone')} format [ ${clrValue(dateTime72)} ]`, () => {
        expect(dateTime72).toMatch(/^\d{2}(:\d{2}){2} (A|P)M [A-Z]{3}\+\d{2}:\d{2}$/);
    });
});