import * as moment from 'moment-timezone';
import { Moment } from 'moment-timezone';
import { deepMergeObject } from '@v8187/rs-utils';
import { randomDate } from './random';

export enum VARIANT {
    SHORT = 'Short', MEDIUM = 'Medium',
    LONG = 'Long', FULL = 'Full'
};

export enum DATE_SEQUENCE {
    MDY = 'MDY', DMY = 'DMY', YMD = 'YMD'
};

export enum DATE_SEPARATOR {
    HYPHEN = '-', FULLSTOP = '.',
    COMMA = ',', SLASH = '/', SPACE = ' '
};

export enum TIME_SEPARATOR {
    HYPHEN = '-', FULLSTOP = '.', COLON = ':'
};

export interface IDateTimeOptions {
    from?: Moment;
    to?: Moment;
    unixTimestampSecond?: boolean;
    unixTimestampMilisecond?: boolean;
    sqlTimestamp?: boolean;
    variant?: keyof VARIANT;
    dateSequence?: keyof DATE_SEQUENCE;
    dateSeparator?: keyof DATE_SEPARATOR;
    onlyTime?: boolean;
    hasTime?: boolean;
    timeSeparator?: keyof TIME_SEPARATOR;
};

const DEFAULTS: IDateTimeOptions = {
    from: moment().subtract(1, 'month'),
    to: moment().add(1, 'month'),
    unixTimestampMilisecond: false,
    unixTimestampSecond: false,
    sqlTimestamp: false,
    onlyTime: false,
    hasTime: false,
    variant: VARIANT.FULL,
    // variant: [
    //     { label: 'Short', value: 'short' },
    //     { label: 'Medium', value: 'medium', default: true },
    //     { label: 'Long', value: 'long' },
    //     { label: 'Full', value: 'full' }
    // ],
    dateSequence: [
        { label: 'DMY', value: DATE_SEQUENCE.DMY },
        { label: 'MDY', value: DATE_SEQUENCE.MDY, default: true },
        { label: 'YMD', value: DATE_SEQUENCE.YMD }
    ],
    dateSeparator: [
        { label: 'Hyphen (-)', value: '-' },
        { label: 'Period (.)', value: '.' },
        { label: 'Comma (,)', value: ',' },
        { label: 'Slash (/)', value: '/', default: true },
        { label: 'Space ( )', value: ' ' }
    ],
    timeSeparator: [
        { label: 'Colon (:)', value: ':', default: true },
        { label: 'Hyphen (-)', value: '-' },
        { label: 'Period (.)', value: '.' }
    ]
};

export const dateTime = (options: IDateTimeOptions = {}) => {
    const temp = deepMergeObject({}, DEFAULTS, options);

    const ranDate = moment(randomDate((temp.from || moment()).toDate(), (temp.to || moment()).toDate()));

    if (temp.unixTimestampSecond) {
        return ranDate.unix();
    }
    if (temp.unixTimestampMilisecond) {
        return +ranDate;
    }
    if (temp.sqlTimestamp) {
        return ranDate.toISOString();
    }
    const { dateSeparator, dateSequence, timeSeparator, hasTime, onlyTime, variant } = temp;

    const dateSep = dateSeparator ? dateSeparator[0].value : '/',
        timeSep = timeSeparator ? timeSeparator[0].value : ':';

    let output = '', dateFormat = '', timeFormat = '';

    if (variant) {
        switch (variant[0].value) {
            // M/DD/YY, hh:mm a
            case 'short':
                const dateSeq = dateSequence ? dateSequence[0].value : DATE_SEQUENCE.MDY;

                if (!onlyTime) {
                    switch (dateSeq) {
                        case DATE_SEQUENCE.DMY:
                            dateFormat = `DD${dateSep}MM${dateSep}YY`;
                            break;
                        case DATE_SEQUENCE.MDY:
                            dateFormat = `MM${dateSep}DD${dateSep}YY`;
                            break;
                        case DATE_SEQUENCE.YMD:
                            dateFormat = `YY${dateSep}MM${dateSep}DD`;
                            break;
                    }
                }
                timeFormat = `hh${timeSep}mm A`;
                break;
            // MMM d, y, hh:mm:ss a
            case 'medium':
                !onlyTime && (dateFormat = `MMM DD, Y`);
                timeFormat = `hh${timeSep}mm${timeSep}ss A`;
                break;
            // MMMM d, y, hh:mm:ss a z
            case 'long':
                !onlyTime && (dateFormat = `MMMM DD, Y`);
                timeFormat = `hh${timeSep}mm${timeSep}ss A`;
                break;
            // dddd, MMMM d, y, h:mm:ss a zzzz
            case 'full':
                !onlyTime && (dateFormat = `dddd, MMMM DD, Y`);
                timeFormat = `hh${timeSep}mm${timeSep}ss A zZ`;
                break;
        }
        output = ranDate.tz('Asia/Kolkata').format(dateFormat + (hasTime ? `${onlyTime ? '' : ', '}${timeFormat}` : ''));
    }
    return output;
};