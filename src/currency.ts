import { randomNum } from './random';
import { padString } from '@v8187/rs-utils';

export const genCurrency = (options?) => {

    const { min, max, decimals, separator, formats } = options;
    let value = '' + randomNum(min, max);

    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, (!separator && separator === '') ? '' : ',');
    if (decimals) {
        value += ('.' + padString(randomNum(0, Number(new Array(decimals + 1).join('9'))), 'RIGHT', '0', decimals));
    }

    return formats[0].symbol + '' + value;
}