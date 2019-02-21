import { xToNum, deepMergeObject, randomItem, randomNum } from '@v8187/rs-utils';

import countriesData from './jsons/countries.data';
import { ICountry } from './geographic';

export const CONUTRIES_LIST = countriesData;

export enum EPhoneLength {
    MIN = 8, MAX = 13
};

export enum EPhoneFormats {
    // FORMAT00 = 'xxxxxxxxxx',
    // FORMAT01 = '(xxx) xxx-xxxx',
    // FORMAT02 = '1-xxx-xxx-xxxx',
    // FORMAT03 = '0xxx xxx xxxx',
    // FORMAT04 = '0x xx xx xx xx',
    // FORMAT05 = '(0x) xxxx xxxx',
    // FORMAT06 = '(0xx) xxxxxxxx',
    // FORMAT07 = '(0xxx) xxxxxxxx',
    // FORMAT08 = '(0xxxx) xxxxxxx',
    // FORMAT09 = '0xx-xxx-xxxx',
    // FORMAT10 = 'xxx-xxxx'
    PLAIN, GROUP_OF_2 = 2, GROUP_OF_3 = 3, GROUP_OF_4 = 4, GROUP_OF_5 = 5
};

export enum EPhoneSeparator {
    HYPHEN = '-', FULLSTOP = '.', SPACE = ' ', NON = ''
};

export enum EPhoneStartsWith {
    PLUS = '+', ZEROS = '00', ISD = ''
};

export interface IPhoneOptions {
    countries?: ICountry[];
    format?: EPhoneFormats;
    isdCodeInBraces?: boolean;
    separateISD?: boolean;
    withISD?: boolean;
    separator?: EPhoneSeparator;
    startsWith?: EPhoneStartsWith;
};

const DEFAULTS = (): TRequired<IPhoneOptions> => ({
    countries: CONUTRIES_LIST.filter((con: ICountry) => con.code3 === 'IND'),
    format: EPhoneFormats.PLAIN,
    isdCodeInBraces: false,
    separateISD: true,
    withISD: true,
    separator: EPhoneSeparator.SPACE,
    startsWith: EPhoneStartsWith.PLUS
});

export const phoneNo = (options: IPhoneOptions = DEFAULTS()): string => {

    const {
        countries, format, isdCodeInBraces, separateISD,
        withISD, separator, startsWith
    } = deepMergeObject(DEFAULTS(), options),
        isd = withISD ? randomItem(countries).isdCode : '';

    let local = xToNum(new Array(randomNum(EPhoneLength.MIN - isd.length, EPhoneLength.MAX - isd.length) + 1).join('x'));

    if (format !== EPhoneFormats.PLAIN && separator !== EPhoneSeparator.NON) {
        local = local.replace(new RegExp(`(\\d{${format}})`, 'g'), `$1${separator}`).replace(/[^\d]$/, '');
    }

    return (isd ? `${isdCodeInBraces ? '(' : ''}${startsWith}${isd}${isdCodeInBraces ? ')' : ''}${separateISD ? separator : ''}` : '') + local;
};