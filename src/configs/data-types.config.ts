import * as moment from 'moment-timezone';
import { EDateSequence } from '../';

export interface IDataType {
    label: string;
    name: string;
    options?: any;
    configurable?: boolean;
};

export const UID = {
    label: 'Unique ID',
    name: 'uid',
    options: {}
};
export const PERSON_NAME = {
    label: 'Person Name',
    name: 'personName',
    configurable: true,
    options: {
        formats: [
            { value: 'name', format: 'Name', example: 'Abraham' },
            { value: 'sur', format: 'Surname', example: 'Clark' },
            { value: 'sur-name', format: 'Surname, Name', example: 'Clark, Abraham', default: true },
            { value: 'name-int', format: 'Name Initial.', example: 'Abraham L.' },
            { value: 'name-sur', format: 'Name Surname', example: 'Abraham Clark' },
            { value: 'name-int-sur', format: 'Name Initial. Surname', example: 'Abraham L. Clark' },
            { value: 'name-sur-int', format: 'Name Surname Initial.', example: 'Abraham Clark L.' },
            { value: 'sur-name-int', format: 'Surname Name Initial.', example: 'Clark, Abraham L.' }
        ],
        male: true,
        female: false
    }
};
export const MOBILE = {
    label: 'Mobile/Phone Number',
    name: 'mobile',
    configurable: true,
    options: {
        formats: [
            { value: 'xxxxxxxxxx', format: 'xxxxxxxxxx', example: '9999999999' },
            { value: '(xxx) xxx-xxxx', format: '(xxx) xxx-xxxx', example: '(999) 999-9999', default: true },
            { value: '1-xxx-xxx-xxxx', format: '1-xxx-xxx-xxxx', example: '1-999-999-9999' },
            { value: '(01xxxx) xxxxx', format: '(01xxxx) xxxxx', example: '(019999) 99999' },
            { value: '(01xxx) xxxxxx', format: '(01xxx) xxxxxx', example: '(01999) 999999' },
            { value: '(01x1) xxx xxxx', format: '(01x1) xxx xxxx', example: '(0191) 999 9999' },
            { value: '(011x) xxx xxxx', format: '(011x) xxx xxxx', example: '(0119) 999 9999' },
            { value: '(02x) xxxx xxxx', format: '(02x) xxxx xxxx', example: '(029) 9999 9999' },
            { value: '03xx xxx xxxx', format: '03xx xxx xxxx', example: '0399 999 9999' },
            { value: '055 xxxx xxxx', format: '055 xxxx xxxx', example: '055 9999 9999' },
            { value: '056 xxxx xxxx', format: '056 xxxx xxxx', example: '056 9999 9999' },
            { value: '070 xxxx xxxx', format: '070 xxxx xxxx', example: '070 9999 9999' },
            { value: '07624 xxxxxx', format: '07624 xxxxxx', example: '07624 999999' },
            { value: '076 xxxx xxxx', format: '076 xxxx xxxx', example: '076 9999 9999' },
            { value: '07xxx xxxxxx', format: '07xxx xxxxxx', example: '07999 999999' },
            { value: '0800 xxx xxxx', format: 'MM00 xxx xxxx', example: '0800 999 9999' },
            { value: '08xx xxx xxxx', format: 'MMxx xxx xxxx', example: '0899 999 9999' },
            { value: '0xxx xxx xxxx', format: '0xxx xxx xxxx', example: '0999 999 9999' },
            { value: '(016x77) xxxx', format: '(016x77) xxxx', example: '(016977) 9999' },
            { value: '(01xxx) xxxxx', format: '(01xxx) xxxxx', example: '(01999) 99999' },
            { value: '0500 xxxxxx', format: '0500 xxxxxx', example: '0500 999999' },
            { value: '0800 xxxxxx', format: 'MM00 xxxxxx', example: '0800 999999' },
            { value: '0800 1111xx', format: 'MM00 1111xx', example: '0800 1111xx' },
            { value: '0845 46 4x', format: 'MM45 46 4x', example: '0845 46 49' },
            { value: '0x xx xx xx xx', format: '0x xx xx xx xx', example: '09 99 99 99 99' },
            { value: '(0x) xxxx xxxx', format: '(0x) xxxx xxxx', example: '(09) 9999 9999' },
            { value: '(0xx) xxxxxxxx', format: '(0xx) xxxxxxxx', example: '(099) 99999999' },
            { value: '(0xxx) xxxxxxxx', format: '(0xxx) xxxxxxxx', example: '(0999) 99999999' },
            { value: '(0xxxx) xxxxxxx', format: '(0xxxx) xxxxxxx', example: '(09999) 9999999' },
            { value: '(03xxxx) xxxxxx', format: '(03xxxx) xxxxxx', example: '(039999) 999999' },
            { value: '0xx-xxx-xxxx', format: '0xx-xxx-xxxx', example: '099-999-9999' },
            { value: 'xxx-xxxx', format: 'xxx-xxxx', example: '999-9999' }
        ]
    }
}
export const GENDER = {
    label: 'Gender',
    name: 'gender',
    configurable: true,
    options: {
        formats: [
            { value: 'mf', format: 'm/f', example: 'm' },
            { value: 'MF', format: 'M/F', example: 'F' },
            { value: 'malefemale', format: 'Male/Female', example: 'Male', default: true }
        ]
    }
};
export const EMAIL = {
    label: 'Email',
    name: 'email',
    configurable: true,
    options: {
        personName: true,
        randomChars: false,
        period: true,
        underscore: false,
        hyphen: false,
        publicDomains: true,
        companyDomains: true
    }
};
export const PASSWORD = {
    label: 'Password',
    name: 'password',
    configurable: true,
    options: {
        upperCase: false,
        lowerCase: true,
        digit: true,
        specialChar: false,
        min: 4,
        max: 6
    }
};
export const DATE_TIME = {
    label: 'Date',
    name: 'dateTime',
    configurable: true,
    options: {
        from: moment(),
        to: moment(),
        unixTimestampMilisecond: false,
        unixTimestampSecond: false,
        sqlTimestamp: false,
        onlyTime: false,
        hasTime: false,
        variant: [
            { label: 'Short', value: 'short' },
            { label: 'Medium', value: 'medium', default: true },
            { label: 'Long', value: 'long' },
            { label: 'Full', value: 'full' }
        ],
        dateSequence: [
            { label: 'DMY', value: EDateSequence.DMY },
            { label: 'MDY', value: EDateSequence.MDY, default: true },
            { label: 'YMD', value: EDateSequence.YMD }
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
    }
};
export const DURATION = {
    label: 'Duration',
    name: 'duration',
    configurable: true,
    options: {
        decades: {
            title: 'Decades',
            selected: false,
            min: 0,
            max: 9,
            sufix: 'Decades',
            prefix: '',
            isSelectList: true
        },
        years: {
            title: 'Years',
            selected: false,
            min: 0,
            max: 1000,
            sufix: 'Years',
            prefix: ''
        },
        months: {
            title: 'Months',
            selected: false,
            min: 0,
            max: 11,
            sufix: 'Months',
            prefix: '',
            isSelectList: true
        },
        weeks: {
            title: 'Weeks',
            selected: false,
            min: 0,
            max: 4,
            sufix: 'Weeks',
            prefix: '',
            isSelectList: true
        },
        days: {
            title: 'Days',
            selected: true,
            min: 0,
            max: 29,
            sufix: 'Days',
            prefix: '',
            isSelectList: true
        },
        hours: {
            title: 'Hours',
            selected: false,
            min: 0,
            max: 23,
            sufix: 'Hours',
            prefix: '',
            isSelectList: true
        },
        minutes: {
            title: 'Minutes',
            selected: false,
            min: 0,
            max: 59,
            sufix: 'Minutes',
            prefix: '',
            isSelectList: true
        },
        seconds: {
            title: 'Seconds',
            selected: false,
            min: 0,
            max: 59,
            sufix: 'Seconds',
            prefix: '',
            isSelectList: true
        },
        miliseconds: {
            title: 'Miliseconds',
            selected: false,
            min: 0,
            max: 999,
            sufix: 'Miliseconds',
            prefix: ''
        }
    }
};
export const COUNTRY = {
    label: 'Country',
    name: 'country',
    options: {}
};
export const STATE = {
    label: 'State / Region',
    name: 'state',
    configurable: true,
    options: {
        countries: [{ name: 'India', isdCode: '91', code2: 'IN', code3: 'IND' }]
    }
};
export const CITY = {
    label: 'City',
    name: 'city',
    configurable: true,
    options: {
        countries: [{ name: 'India', isdCode: '91', code2: 'IN', code3: 'IND' }],
        states: [
            { id: 377, name: 'Punjab', country: 'IND', latitude: 30.9, longitude: 75.85 },
            { id: 160, name: 'Karnataka', country: 'IND', latitude: 12.98, longitude: 77.58 }
        ]
    }
};
export const ADDRESS = {
    label: 'Street Address',
    name: 'streetAddress',
    options: {}
};
export const PINCODE = {
    label: 'Pincode',
    name: 'pincode',
    options: {}
};
export const LAT_LONG = {
    label: 'Latitude/Logitude',
    name: 'latLong',
    configurable: true,
    options: {
        countries: [{ name: 'India', isdCode: '91', code2: 'IN', code3: 'IND' }]
    }
};
export const CURRENCY = {
    label: 'Currency',
    name: 'currency',
    configurable: true,
    options: {
        separator: ',',
        decimals: 2,
        min: 100,
        max: 99999,
        formats: [
            { unicode: 'U+0024', htmlcode: '\\0024', name: 'DOLLAR SIGN', symbol: '$' },
            { unicode: 'U+00A2', htmlcode: '\\00A2', name: 'CENT SIGN', symbol: '¢' },
            { unicode: 'U+00A3', htmlcode: '\\00A3', name: 'POUND SIGN', symbol: '£' },
            { unicode: 'U+00A5', htmlcode: '\\00A5', name: 'YEN SIGN', symbol: '¥' },
            { unicode: 'U+0E3F', htmlcode: '\\0E3F', name: 'THAI CURRENCY SYMBOL BAHT', symbol: '฿' },
            { unicode: 'U+20A0', htmlcode: '\\20A0', name: 'EURO-CURRENCY SIGN', symbol: '₠' },
            { unicode: 'U+20A1', htmlcode: '\\20A1', name: 'COLON SIGN', symbol: '₡' },
            { unicode: 'U+20A2', htmlcode: '\\20A2', name: 'CRUZEIRO SIGN', symbol: '₢' },
            { unicode: 'U+20A3', htmlcode: '\\20A3', name: 'FRENCH FRANC SIGN', symbol: '₣' },
            { unicode: 'U+20A4', htmlcode: '\\20A4', name: 'LIRA SIGN', symbol: '₤' },
            { unicode: 'U+20A6', htmlcode: '\\20A6', name: 'NAIRA SIGN', symbol: '₦' },
            { unicode: 'U+20A7', htmlcode: '\\20A7', name: 'PESETA SIGN', symbol: '₧' },
            { unicode: 'U+20A9', htmlcode: '\\20A9', name: 'WON SIGN', symbol: '₩' },
            { unicode: 'U+20AA', htmlcode: '\\20AA', name: 'NEW SHEQEL SIGN', symbol: '₪' },
            { unicode: 'U+20AB', htmlcode: '\\20AB', name: 'DONG SIGN', symbol: '₫' },
            { unicode: 'U+20AC', htmlcode: '\\20AC', name: 'EURO SIGN', symbol: '€' },
            { unicode: 'U+20AD', htmlcode: '\\20AD', name: 'KIP SIGN', symbol: '₭' },
            { unicode: 'U+20AE', htmlcode: '\\20AE', name: 'TUGRIK SIGN', symbol: '₮' },
            { unicode: 'U+20AF', htmlcode: '\\20AF', name: 'DRACHMA SIGN', symbol: '₯' },
            { unicode: 'U+20B0', htmlcode: '\\20B0', name: 'GERMAN PENNY SIGN', symbol: '₰' },
            { unicode: 'U+20B1', htmlcode: '\\20B1', name: 'PESO SIGN', symbol: '₱' },
            { unicode: 'U+20B2', htmlcode: '\\20B2', name: 'GUARANI SIGN', symbol: '₲' },
            { unicode: 'U+20B3', htmlcode: '\\20B3', name: 'AUSTRAL SIGN', symbol: '₳' },
            { unicode: 'U+20B4', htmlcode: '\\20B4', name: 'HRYVNIA SIGN', symbol: '₴' },
            { unicode: 'U+20B5', htmlcode: '\\20B5', name: 'CEDI SIGN', symbol: '₵' },
            { unicode: 'U+20B8', htmlcode: '\\20B8', name: 'TENGE SIGN', symbol: '₸' },
            { unicode: 'U+20B9', htmlcode: '\\20B9', name: 'INDIAN RUPEE SIGN', symbol: '₹', default: true },
            { unicode: 'U+20BA', htmlcode: '\\20BA', name: 'TURKISH LIRA SIGN', symbol: '₺' },
            { unicode: 'U+20BC', htmlcode: '\\20BC', name: 'MANAT SIGN', symbol: '₼' },
            { unicode: 'U+20BD', htmlcode: '\\20BD', name: 'RUBLE SIGN', symbol: '₽' },
            { unicode: 'U+20BE', htmlcode: '\\20BE', name: 'LARI SIGN', symbol: '₾' },
            { unicode: 'U+20BF', htmlcode: '\\20BF', name: 'BITCOIN SIGN', symbol: '₿' }
        ]
    }
};
export const CREDIT_CARD2 = {
    label: 'Credit Card Number',
    name: 'creditCard',
    options: {
        formats: [
            {
                name: 'Mastercard',
                formats: [
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' }
                ]
            },
            {
                name: 'Visa',
                formats: [
                    { value: 'xxxxxxxxxxxxx', format: 'xxxxxxxxxxxxx', example: '9999999999999' },
                    { value: 'xxxx xxx xx xxxx', format: 'xxxx xxx xx xxxx', example: '9999 999 99 9999', default: true },
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999' },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' }
                ]
            },
            {
                name: 'Visa Electron',
                formats: [
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' }
                ]
            },
            {
                name: 'American Express',
                formats: [
                    { value: 'xxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxx', example: '999999999999999' },
                    { value: 'xxxx xxxxxx xxxxx', format: 'xxxx xxxxxx xxxxx', example: '9999 999999 99999', default: true }
                ]
            },
            {
                name: 'Discover',
                formats: [
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' }
                ]
            },
            {
                name: 'Carte Blanche',
                formats: [
                    { value: 'xxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxx', example: '99999999999999' },
                    { value: 'xxxx xxxxxx xxxx', format: 'xxxx xxxxxx xxxx', example: '9999 999999 9999', default: true }
                ]
            },
            {
                name: 'Diner\'s Club International',
                formats: [
                    { value: 'xxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxx', example: '99999999999999' },
                    { value: 'xxxx xxxxxx xxxx', format: 'xxxx xxxxxx xxxx', example: '9999 999999 9999', default: true }
                ]
            },
            {
                name: 'enRoute',
                formats: [
                    { value: 'xxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxx', example: '999999999999999' },
                    { value: 'xxxx xxxxxx xxxxx', format: 'xxxx xxxxxx xxxxx', example: '9999 999999 99999', default: true }
                ]
            },
            {
                name: 'JCB',
                formats: [
                    { value: 'xxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxx', example: '999999999999999' },
                    { value: 'xxxx xxxxxx xxxxx', format: 'xxxx xxxxxx xxxxx', example: '9999 999999 99999' },
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' }
                ]
            },
            {
                name: 'Maestro',
                formats: [
                    { value: 'xxxxxxxxxxxx', format: 'xxxxxxxxxxxx', example: '999999999999' },
                    { value: 'xxxxxxxxxxxxx', format: 'xxxxxxxxxxxxx', example: '9999999999999' },
                    { value: 'xxxx xxx xx xxxx', format: 'xxxx xxx xx xxxx', example: '9999 999 99 9999', default: true },
                    { value: 'xxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxx', example: '99999999999999' },
                    { value: 'xxxx xxxxxx xxxx', format: 'xxxx xxxxxx xxxx', example: '9999 999999 9999' },
                    { value: 'xxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxx', example: '999999999999999' },
                    { value: 'xxxx xxxxxx xxxxx', format: 'xxxx xxxxxx xxxxx', example: '9999 999999 99999' },
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999' },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' },
                    { value: 'xxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxx', example: '99999999999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxx', example: '999999999999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxxx', example: '9999999999999999999' },
                    { value: 'xxxxxx xx xxxx xxxx xxx', format: 'xxxxxx xx xxxx xxxx xxx', example: '999999 99 9999 9999 999' }
                ]
            },
            {
                name: 'Solo',
                formats: [
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxx', example: '999999999999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxxx', example: '9999999999999999999' },
                    { value: 'xxxxxx xx xxxx xxxx xxx', format: 'xxxxxx xx xxxx xxxx xxx', example: '999999 99 9999 9999 999' }
                ]
            },
            {
                name: 'Switch',
                formats: [
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxx', example: '999999999999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxxx', example: '9999999999999999999' },
                    { value: 'xxxxxx xx xxxx xxxx xxx', format: 'xxxxxx xx xxxx xxxx xxx', example: '999999 99 9999 9999 999' }
                ]
            },
            {
                name: 'Laser',
                formats: [
                    { value: 'xxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxx', example: '9999999999999999' },
                    { value: 'xxxx xxxx xxxx xxxx', format: 'xxxx xxxx xxxx xxxx', example: '9999 9999 9999 9999', default: true },
                    { value: 'xxxxxx xxxxxx xxxx', format: 'xxxxxx xxxxxx xxxx', example: '999999 999999 9999' },
                    { value: 'xxx xxxxx xxxxx xxx', format: 'xxx xxxxx xxxxx xxx', example: '999 99999 99999 999' },
                    { value: 'xxxxxx xxxxxxxxxx', format: 'xxxxxx xxxxxxxxxx', example: '999999 9999999999' },
                    { value: 'xxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxx', example: '99999999999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxx', example: '999999999999999999' },
                    { value: 'xxxxxxxxxxxxxxxxxxx', format: 'xxxxxxxxxxxxxxxxxxx', example: '9999999999999999999' },
                    { value: 'xxxxxx xx xxxx xxxx xxx', format: 'xxxxxx xx xxxx xxxx xxx', example: '999999 99 9999 9999 999' }
                ]
            }
        ]
    }
};

export const CREDIT_CARD = {
    label: 'Credit Card Number',
    name: 'creditCard',
    configurable: true,
    options: {
        formats: [
            // American Express	34, 37 - 15	Luhn algorithm
            {
                name: 'American Express',
                formats: [{
                    iins: [34, 37], range: { min: 15, max: 15 }
                }],
                default: true
            }
            // China UnionPay	62 - 16–19
            , {
                name: 'China UnionPay',
                formats: [{
                    iins: [62], range: { min: 16, max: 19 }
                }]
            }
            // Diners Club International	
            // 36 - 14–19	Luhn algorithm
            // 300–305, 3095, 38–39 - 16–19            
            , {
                name: 'Diners Club International',
                formats: [{
                    iins: [36], range: { min: 14, max: 19 }
                }, {
                    iins: [{ min: 300, max: 305 }, 3095, 38, 39], range: { min: 16, max: 19 }
                }]
            }
            // Diners Club United States & Canada	54, 55 (MasterCard co-branded) - 16
            , {
                name: 'Diners Club United States & Canada',
                formats: [{
                    iins: [54, 55], range: { min: 16, max: 16 }
                }]
            }
            // Discover Card	6011, 64, 65 - 16–19
            , {
                name: 'Discover Card',
                formats: [{
                    iins: [6011, 64, 65], range: { min: 16, max: 19 }
                }]
            }
            // RuPay	60, 6521 - 16
            , {
                name: 'RuPay',
                formats: [{
                    iins: [60, 6521], range: { min: 16, max: 16 }
                }]
            }
            // JCB	3528–3589 - 16–19
            , {
                name: 'JCB',
                formats: [{
                    iins: [{ min: 3528, max: 3589 }], range: { min: 16, max: 19 }
                }]
            }
            // Maestro	50, 56–58, 639, 67 - 12–19
            , {
                name: 'Maestro',
                formats: [{
                    iins: [50, 56, 57, 58, 639, 67], range: { min: 12, max: 19 }
                }]
            }
            // Dankort	5019  - 16
            // 4571 (Visa co-branded)  - 16
            , {
                name: 'Dankort',
                formats: [{
                    iins: [5019, 4571], range: { min: 16, max: 16 }
                }]
            }
            // MIR	2200–2204 - 16
            , {
                name: 'MIR',
                formats: [{
                    iins: [{ min: 2200, max: 2204 }], range: { min: 16, max: 16 }
                }]
            }
            // Mastercard	222100–272099	- 2017	16
            // 51–55 - 16
            , {
                name: 'Mastercard',
                formats: [{
                    iins: [{ min: 222100, max: 272099 }], range: { min: 16, max: 16 }
                }, {
                    iins: [{ min: 51, max: 55 }], range: { min: 16, max: 16 }
                }]
            }
            // Troy	979200–979289 - 16
            , {
                name: 'Troy',
                formats: [{
                    iins: [{ min: 979200, max: 979289 }], range: { min: 16, max: 16 }
                }]
            }
            // Visa	4 (including related/partner brands: Dankort, Electron, etc.) - 16
            , {
                name: 'Visa',
                formats: [{
                    iins: [4], range: { min: 16, max: 16 }
                }]
            }
            // UATP	1 - 15
            , {
                name: 'UATP',
                formats: [{
                    iins: [1], range: { min: 15, max: 15 }
                }]
            }
            // Verve	506099–506198, 650002–650027 - 16, 19
            , {
                name: 'Verve',
                formats: [{
                    iins: [{ min: 506099, max: 506198 }, { min: 650002, max: 650027 }], range: [16, 19]
                }]
            }
        ],
        separator: ' '
    }
};

export const CVV = {
    label: 'CVV Code',
    name: 'cvv',
    options: {
        formats: [
            { value: 'xxx', format: 'xxx', example: '123', default: true }
        ]
    }
};
export const CC_PIN = {
    label: 'Credit Card PIN',
    name: 'ccPin',
    options: {
        formats: [
            { value: 'xxxx', format: 'xxxx', example: '1234', default: true }
        ]
    }
};
export const COMPANY = {
    label: 'Company',
    name: 'company',
    options: {}
};
export const AADHAAR = {
    label: 'Aadhaar Number',
    name: 'aadhaar',
    options: {
        /* formats: [
            { value: 'xxxxxxxxxxxx', format: 'xxxxxxxxxxxx', example: '123456789123', default: true }
        ] */
    }
};
export const PAN = {
    label: 'Permanent Account Number',
    name: 'pan',
    options: {
        formats: [
            { value: 'AAAAAxxxxA', format: 'AAAAAxxxxA', example: 'AAAAA1234A', default: true }
        ]
    }
};
export const PASSPORT = {
    label: 'Passport Number',
    name: 'passport',
    options: {}
};
export const ALPHANUM = {
    label: 'Alphanumeric',
    name: 'alphanumeric',
    configurable: true,
    options: {}
};
export const NUM_RANGE = {
    label: 'Number Range',
    name: 'numRange',
    options: {}
};
export const AUTO_INCR_NUM = {
    label: 'Auto Increment Number',
    name: 'autoIncrement',
    options: {}
};
export const RAND_NUM = {
    label: 'Random Number',
    name: 'numRandom',
    options: {}
}
export const RAND_WORD = {
    label: 'Random Words',
    name: 'wordRandom',
    options: {}
}
export const MARITAL = {
    label: 'Marital Status',
    name: 'marital',
    options: {
        formats: []
    }
};
export const DEPARTMENT = {
    label: 'Department Names',
    name: 'department',
    options: {
        formats: []
    }
};
export const COLOR = {
    label: 'Color Name',
    name: 'color',
    options: {}
};
export const BIRD = {
    label: 'Bird Name',
    name: 'bird',
    options: {}
};
export const ANIMAL = {
    label: 'Animal Name',
    name: 'animal',
    options: {}
};
export const FISH = {
    label: 'Fish Name',
    name: 'fish',
    options: {}
};
export const FLOWER = {
    label: 'Flower Name',
    name: 'flower',
    options: {}
};
export const FRUIT = {
    label: 'Fruit Name',
    name: 'fruit',
    options: {}
};
export const VEGETABLE = {
    label: 'Vegetable Name',
    name: 'vegetable',
    options: {}
};

export default [
    UID, PERSON_NAME, MOBILE, GENDER, EMAIL, PASSWORD, DATE_TIME, DURATION,
    COUNTRY, STATE, CITY, ADDRESS, PINCODE, LAT_LONG,
    CURRENCY, CREDIT_CARD, CVV, CC_PIN,
    COMPANY, AADHAAR, PAN, PASSPORT,
    ALPHANUM, NUM_RANGE, AUTO_INCR_NUM, RAND_NUM, RAND_WORD,
    MARITAL, DEPARTMENT, COLOR,
    BIRD, ANIMAL, FISH, FLOWER, FRUIT, VEGETABLE
];