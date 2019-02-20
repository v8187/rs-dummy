import { xToNum } from '@v8187/rs-utils';

import countries from './jsons/countries.data';
import { ICountry } from './geographic';

export const CONUTRIES_LIST = countries;

export enum EMobileFormats {
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
    PLAIN, GROUP_OF_2, GROUP_OF_3, GROUP_OF_4, GROUP_OF_5
};

export enum EMobileSeparator {
    HYPHEN = '-', FULLSTOP = '.', SPACE = ' '
};

export enum EMobileStartsWith {
    PLUS = '+', ZEROS = '00', ISD = 'ISD'
};

export interface IMobileOptions {
    countries?: ICountry[];
    format?: EMobileFormats;
    isdCodeInBraces?: boolean;
    separateISD?: boolean;
    separator?: EMobileSeparator;
    startsWith?: EMobileStartsWith;
};

const DEFAULTS: TRequired<IMobileOptions> = {
    countries: CONUTRIES_LIST.filter((con: ICountry): boolean => con.code3 === 'IND'),
    format: EMobileFormats.GROUP_OF_5,
    isdCodeInBraces: false,
    separateISD: true,
    separator: EMobileSeparator.SPACE,
    startsWith: EMobileStartsWith.PLUS
};

export const phoneNo = (options: IMobileOptions = DEFAULTS): string => {

    // return xToNum(options.format || DEFAULTS.format);
    return '';
};