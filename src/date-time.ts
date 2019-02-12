// import * as moment from 'moment';
// import { Moment } from 'moment';
import * as moment from 'moment-timezone';
import { Moment } from 'moment-timezone';
import { randomDate } from './random';

export enum DATE_SEQUENCE {
    MDY, DMY, YMD
}

export interface IDateTime {
    from?: Moment;
    to?: Moment;
    unixTimestampSecond?: boolean;
    unixTimestampMilisecond?: boolean;
    sqlTimestamp?: boolean;
    variant?: any[];
    dateSequence?: any[];
    dateSeparator?: any[];
    onlyTime?: boolean;
    hasTime?: boolean;
    timeSeparator?: any[];
};

export const dateTime = (options: IDateTime = {}) => {
    // return moment(randomDate(options.dateFrom.toDate(), options.dateTo.toDate())).format(options.formats[0].value);

    const ranDate = moment(randomDate((options.from || moment()).toDate(), (options.to || moment()).toDate()));

    if (options.unixTimestampSecond) {
        return ranDate.unix();
    }
    if (options.unixTimestampMilisecond) {
        return +ranDate;
    }
    if (options.sqlTimestamp) {
        return ranDate.toISOString();
    }
    const { dateSeparator, dateSequence, timeSeparator, hasTime, onlyTime, variant } = options;

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
}