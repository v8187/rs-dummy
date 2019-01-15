import * as moment from 'moment';
import { randomDate } from './random';

export const dateTime = (options?) => {
    return moment(randomDate(options.dateFrom.toDate(), options.dateTo.toDate())).format(options.formats[0].value);
}