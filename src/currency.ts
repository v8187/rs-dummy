import { padString, randomNum, deepMergeObject } from '@v8187/rs-utils';

export const CURRENCY_SYMBOLS = [
    { unicode: 'U+0024', htmlCode: '\\0024', name: 'DOLLAR SIGN', symbol: '$' },
    { unicode: 'U+00A2', htmlCode: '\\00A2', name: 'CENT SIGN', symbol: '¢' },
    { unicode: 'U+00A3', htmlCode: '\\00A3', name: 'POUND SIGN', symbol: '£' },
    { unicode: 'U+00A5', htmlCode: '\\00A5', name: 'YEN SIGN', symbol: '¥' },
    { unicode: 'U+0E3F', htmlCode: '\\0E3F', name: 'THAI CURRENCY SYMBOL BAHT', symbol: '฿' },
    { unicode: 'U+20A0', htmlCode: '\\20A0', name: 'EURO-CURRENCY SIGN', symbol: '₠' },
    { unicode: 'U+20A1', htmlCode: '\\20A1', name: 'COLON SIGN', symbol: '₡' },
    { unicode: 'U+20A2', htmlCode: '\\20A2', name: 'CRUZEIRO SIGN', symbol: '₢' },
    { unicode: 'U+20A3', htmlCode: '\\20A3', name: 'FRENCH FRANC SIGN', symbol: '₣' },
    { unicode: 'U+20A4', htmlCode: '\\20A4', name: 'LIRA SIGN', symbol: '₤' },
    { unicode: 'U+20A6', htmlCode: '\\20A6', name: 'NAIRA SIGN', symbol: '₦' },
    { unicode: 'U+20A7', htmlCode: '\\20A7', name: 'PESETA SIGN', symbol: '₧' },
    { unicode: 'U+20A9', htmlCode: '\\20A9', name: 'WON SIGN', symbol: '₩' },
    { unicode: 'U+20AA', htmlCode: '\\20AA', name: 'NEW SHEQEL SIGN', symbol: '₪' },
    { unicode: 'U+20AB', htmlCode: '\\20AB', name: 'DONG SIGN', symbol: '₫' },
    { unicode: 'U+20AC', htmlCode: '\\20AC', name: 'EURO SIGN', symbol: '€' },
    { unicode: 'U+20AD', htmlCode: '\\20AD', name: 'KIP SIGN', symbol: '₭' },
    { unicode: 'U+20AE', htmlCode: '\\20AE', name: 'TUGRIK SIGN', symbol: '₮' },
    { unicode: 'U+20AF', htmlCode: '\\20AF', name: 'DRACHMA SIGN', symbol: '₯' },
    { unicode: 'U+20B0', htmlCode: '\\20B0', name: 'GERMAN PENNY SIGN', symbol: '₰' },
    { unicode: 'U+20B1', htmlCode: '\\20B1', name: 'PESO SIGN', symbol: '₱' },
    { unicode: 'U+20B2', htmlCode: '\\20B2', name: 'GUARANI SIGN', symbol: '₲' },
    { unicode: 'U+20B3', htmlCode: '\\20B3', name: 'AUSTRAL SIGN', symbol: '₳' },
    { unicode: 'U+20B4', htmlCode: '\\20B4', name: 'HRYVNIA SIGN', symbol: '₴' },
    { unicode: 'U+20B5', htmlCode: '\\20B5', name: 'CEDI SIGN', symbol: '₵' },
    { unicode: 'U+20B8', htmlCode: '\\20B8', name: 'TENGE SIGN', symbol: '₸' },
    { unicode: 'U+20B9', htmlCode: '\\20B9', name: 'INDIAN RUPEE SIGN', symbol: '₹' },
    { unicode: 'U+20BA', htmlCode: '\\20BA', name: 'TURKISH LIRA SIGN', symbol: '₺' },
    { unicode: 'U+20BC', htmlCode: '\\20BC', name: 'MANAT SIGN', symbol: '₼' },
    { unicode: 'U+20BD', htmlCode: '\\20BD', name: 'RUBLE SIGN', symbol: '₽' },
    { unicode: 'U+20BE', htmlCode: '\\20BE', name: 'LARI SIGN', symbol: '₾' },
    { unicode: 'U+20BF', htmlCode: '\\20BF', name: 'BITCOIN SIGN', symbol: '₿' }
];

export interface ICSymbol {
    unicode: string;
    htmlCode: string;
    name: string;
    symbol: string;
};

export interface ICurrencyOptions {
    min?: number;
    max?: number;
    decimals?: number;
    separator?: string;
    symbol?: ICSymbol;
};

const DEFAULTS: TRequired<ICurrencyOptions> = {
    min: 10,
    max: 1000,
    decimals: 2,
    separator: ',',
    symbol: { ...CURRENCY_SYMBOLS[0] }
};

export const currency = (options: ICurrencyOptions = DEFAULTS): string => {

    const { min, max, decimals, separator, symbol } = deepMergeObject({}, DEFAULTS, options);

    let value = '' + randomNum(min, max);
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, (!separator && separator === '') ? '' : ',');

    if (decimals) {
        value += ('.' + padString(randomNum(0, Number(new Array(decimals + 1).join('9'))), 'RIGHT', '0', decimals));
    }

    return symbol.symbol + '' + value;
};