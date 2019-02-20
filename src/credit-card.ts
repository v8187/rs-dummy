import { xToNum, randomNum, deepMergeObject } from '@v8187/rs-utils';

export const CCARD_TYPES = [
    // American Express 34, 37 - 15 Luhn algorithm
    {
        name: 'American Express',
        formats: [{
            iins: [34, 37], range: { min: 15, max: 15 }
        }]
    }
    // China UnionPay 62 - 16–19
    , {
        name: 'China UnionPay',
        formats: [{
            iins: [62], range: { min: 16, max: 19 }
        }]
    }
    // Diners Club International
    // 36 - 14–19 Luhn algorithm
    // 300–305, 3095, 38–39 - 16–19
    , {
        name: 'Diners Club International',
        formats: [{
            iins: [36], range: { min: 14, max: 19 }
        }, {
            iins: [{ min: 300, max: 305 }, 3095, 38, 39], range: { min: 16, max: 19 }
        }]
    }
    // Diners Club United States & Canada 54, 55 (MasterCard co-branded) - 16
    , {
        name: 'Diners Club United States & Canada',
        formats: [{
            iins: [54, 55], range: { min: 16, max: 16 }
        }]
    }
    // Discover Card 6011, 64, 65 - 16–19
    , {
        name: 'Discover Card',
        formats: [{
            iins: [6011, 64, 65], range: { min: 16, max: 19 }
        }]
    }
    // RuPay 60, 6521 - 16
    , {
        name: 'RuPay',
        formats: [{
            iins: [60, 6521], range: { min: 16, max: 16 }
        }]
    }
    // JCB 3528–3589 - 16–19
    , {
        name: 'JCB',
        formats: [{
            iins: [{ min: 3528, max: 3589 }], range: { min: 16, max: 19 }
        }]
    }
    // Maestro 50, 56–58, 639, 67 - 12–19
    , {
        name: 'Maestro',
        formats: [{
            iins: [50, 56, 57, 58, 639, 67], range: { min: 12, max: 19 }
        }]
    }
    // Dankort 5019 - 16
    // 4571 (Visa co-branded) - 16
    , {
        name: 'Dankort',
        formats: [{
            iins: [5019, 4571], range: { min: 16, max: 16 }
        }]
    }
    // MIR 2200–2204 - 16
    , {
        name: 'MIR',
        formats: [{
            iins: [{ min: 2200, max: 2204 }], range: { min: 16, max: 16 }
        }]
    }
    // Mastercard 222100–272099 - 2017 16
    // 51–55 - 16
    , {
        name: 'Mastercard',
        formats: [{
            iins: [{ min: 222100, max: 272099 }], range: { min: 16, max: 16 }
        }, {
            iins: [{ min: 51, max: 55 }], range: { min: 16, max: 16 }
        }]
    }
    // Troy 979200–979289 - 16
    , {
        name: 'Troy',
        formats: [{
            iins: [{ min: 979200, max: 979289 }], range: { min: 16, max: 16 }
        }]
    }
    // Visa 4 (including related/partner brands: Dankort, Electron, etc.) - 16
    , {
        name: 'Visa',
        formats: [{
            iins: [4], range: { min: 16, max: 16 }
        }]
    }
    // UATP 1 - 15
    , {
        name: 'UATP',
        formats: [{
            iins: [1], range: { min: 15, max: 15 }
        }]
    }
    // Verve 506099–506198, 650002–650027 - 16, 19
    , {
        name: 'Verve',
        formats: [{
            iins: [{ min: 506099, max: 506198 }, { min: 650002, max: 650027 }], range: { min: 16, max: 19 }
        }]
    }
];

interface IMinMax {
    min: number; max: number;
};

export interface ICCardFormat {
    iins: (IMinMax | number)[]; range: IMinMax;
};

export interface ICCardType {
    name: string; formats: ICCardFormat[];
};

export interface ICCardOptions {
    cardTypes?: ICCardType[]; separator?: string;
};

const DEFAULTS: TRequired<ICCardOptions> = {
    cardTypes: [CCARD_TYPES[0]], separator: ' '
};

export const creditCard = (options: ICCardOptions = DEFAULTS): string => {

    const { cardTypes, separator } = deepMergeObject({}, DEFAULTS, options);
    const card = cardTypes[randomNum(0, cardTypes.length - 1)];

    const { formats } = card;
    const format = formats[randomNum(0, formats.length - 1)];

    const { iins, range } = format;
    const iin = iins[randomNum(0, iins.length - 1)];

    let cardNumber: string = '' + (typeof iin === 'number' ? iin : randomNum(iin.min, iin.max));
    cardNumber += xToNum(new Array(randomNum(range.min, range.max) - cardNumber.length + 1).join('x'));

    return !separator ? cardNumber : cardNumber.replace(/\B(?=(\d{4})+(?!\d))/g, separator);
};