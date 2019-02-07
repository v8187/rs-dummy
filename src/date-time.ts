import * as moment from 'moment';
import { Moment } from 'moment';
import { randomDate } from './random';

export interface IDateTime {
    from?: Moment;
    to?: Moment;
    unixTimestamp?: boolean;
    sqlTimeStamp?: boolean;
    variant?: any[];
    dateSequence?: any[];
    dateSeparator?: any[];
    onlyTime?: boolean;
    hasTime?: boolean;
    timeSeparator?: any[];
};

export const dateTime = (options: IDateTime = {}) => {
    // return moment(randomDate(options.dateFrom.toDate(), options.dateTo.toDate())).format(options.formats[0].value);

    const ranDate = randomDate((options.from || moment()).toDate(), (options.to || moment()).toDate());

    if (options.unixTimestamp) {
        return +moment(ranDate);
    }
    if (options.sqlTimeStamp) {
        return moment(ranDate).toISOString();
    }
    return '';
}