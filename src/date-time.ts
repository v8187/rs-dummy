import * as moment from 'moment-timezone';
import { deepMergeObject } from '@v8187/rs-utils';
import { randomDate } from './random';

export enum EVariant {
    SHORT = 'Short', MEDIUM = 'Medium', LONG = 'Long', FULL = 'Full'
};

export enum EDateSequence {
    MDY = 'MDY', DMY = 'DMY', YMD = 'YMD'
};

export enum EDateSeparator {
    HYPHEN = '-', FULLSTOP = '.',
    COMMA = ',', SLASH = '/', SPACE = ' '
};

export enum ETimeSeparator {
    HYPHEN = '-', FULLSTOP = '.', COLON = ':'
};

export interface IDateTimeOptions {
    from?: number;
    to?: number;
    unixTimestampSecond?: boolean;
    unixTimestampMilisecond?: boolean;
    sqlTimestamp?: boolean;
    variant?: EVariant;
    dateSequence?: EDateSequence;
    dateSeparator?: EDateSeparator;
    onlyTime?: boolean;
    hasTime?: boolean;
    timeSeparator?: ETimeSeparator;
};

export const dateTimeDefaults = (): TRequired<IDateTimeOptions> => ({
    from: +(moment().subtract(1, 'month')),
    to: +(moment().add(1, 'month')),
    unixTimestampMilisecond: false,
    unixTimestampSecond: false,
    sqlTimestamp: false,
    onlyTime: false,
    hasTime: false,
    variant: EVariant.FULL,
    dateSequence: EDateSequence.MDY,
    dateSeparator: EDateSeparator.SLASH,
    timeSeparator: ETimeSeparator.COLON
});

/**
 * Generates the random Date/Time in various Formats based on given parameters
 * 
 * @param options { IDateTimeOptions }
 * @returns { string }
 */
export const dateTime = (options: IDateTimeOptions = dateTimeDefaults()): string | number => {

    const temp = deepMergeObject(dateTimeDefaults(), options);

    const ranDate = moment(randomDate(new Date(temp.from), new Date(temp.to)));

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

    let output = '', dateFormat = '', timeFormat = '';

    if (variant) {
        switch (variant) {
            // M/DD/YY, hh:mm a
            case EVariant.SHORT:
                if (!onlyTime) {
                    switch (dateSequence) {
                        case EDateSequence.DMY:
                            dateFormat = `DD${dateSeparator}MM${dateSeparator}YY`;
                            break;
                        case EDateSequence.MDY:
                            dateFormat = `MM${dateSeparator}DD${dateSeparator}YY`;
                            break;
                        case EDateSequence.YMD:
                            dateFormat = `YY${dateSeparator}MM${dateSeparator}DD`;
                            break;
                    }
                }
                timeFormat = `hh${timeSeparator}mm A`;
                break;
            // MMM d, y, hh:mm:ss a
            case EVariant.MEDIUM:
                !onlyTime && (dateFormat = `MMM DD, Y`);
                timeFormat = `hh${timeSeparator}mm${timeSeparator}ss A`;
                break;
            // MMMM d, y, hh:mm:ss a z
            case EVariant.LONG:
                !onlyTime && (dateFormat = `MMMM DD, Y`);
                timeFormat = `hh${timeSeparator}mm${timeSeparator}ss A`;
                break;
            // dddd, MMMM d, y, h:mm:ss a zzzz
            case EVariant.FULL:
                !onlyTime && (dateFormat = `dddd, MMMM DD, Y`);
                timeFormat = `hh${timeSeparator}mm${timeSeparator}ss A zZ`;
                break;
        }
        output = ranDate.tz('Asia/Kolkata').format(dateFormat + (hasTime ? `${onlyTime ? '' : ', '}${timeFormat}` : ''));
    }
    return output;
};

// export const DT_VARIANTS = [
//     { label: 'Short', value: EVariant.SHORT },
//     { label: 'Medium', value: EVariant.MEDIUM },
//     { label: 'Long', value: EVariant.LONG },
//     { label: 'Full', value: EVariant.FULL }
// ];

// export const DT_DATE_SEQUENCES = [
//     { label: 'DMY', value: EDateSequence.DMY },
//     { label: 'MDY', value: EDateSequence.MDY },
//     { label: 'YMD', value: EDateSequence.YMD }
// ];

// export const DT_DATE_SEPARATORS = [
//     { label: 'Hyphen (-)', value: EDateSeparator.HYPHEN },
//     { label: 'Fullstop (.)', value: EDateSeparator.FULLSTOP },
//     { label: 'Comma (,)', value: EDateSeparator.COMMA },
//     { label: 'Slash (/)', value: EDateSeparator.SLASH },
//     { label: 'Space ( )', value: EDateSeparator.SPACE }
// ];

// export const DT_TIME_SEPARATORS = [
//     { label: 'Colon (:)', value: ETimeSeparator.COLON },
//     { label: 'Hyphen (-)', value: ETimeSeparator.HYPHEN },
//     { label: 'Fullstop (.)', value: ETimeSeparator.FULLSTOP }
// ];