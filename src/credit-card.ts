import { xToNum, randomNum } from '@v8187/rs-utils';

interface IMinMax {
    min:number;
    max:number;
};

export interface ICreditCardOptions {
    formats: {
name:string;
formats:{
    iins: IMinMax|number[];
    range: IMinMax;
};
    }[];
};

export const creditCard = (options) => {

    const cards = options.formats;
    const card = cards[1] ? cards[randomNum(0, cards.length - 1)] : cards[0];

    const { formats } = card;
    const format = formats[1] ? formats[randomNum(0, formats.length - 1)] : formats[0];

    const { iins, range } = format;
    const iin = iins[1] ? iins[randomNum(0, iins.length - 1)] : iins[0];

    let cardNumber = '';

    cardNumber += typeof iin === 'number' ? iin : randomNum(iin.min, iin.max);
    cardNumber += xToNum(new Array(randomNum(range.min, range.max) - cardNumber.length + 1).join('x'));

    return !options.separator ? cardNumber : cardNumber.replace(/\B(?=(\d{4})+(?!\d))/g, options.separator || '');
};