import { xToNum, deepMergeObject, randomItem, randomNum } from '@v8187/rs-utils';

import { ICountry, CONUTRIES_LIST } from './geographic';

export enum EPhoneLength {
    MIN = 8, MAX = 13
};

export enum EPhoneFormats {
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
    isdInBraces?: boolean;
    separateISD?: boolean;
    withISD?: boolean;
    separator?: EPhoneSeparator;
    startsWith?: EPhoneStartsWith;
};

const DEFAULTS = (): TRequired<IPhoneOptions> => ({
    countries: CONUTRIES_LIST.filter((con: ICountry) => con.code3 === 'IND'),
    format: EPhoneFormats.PLAIN,
    isdInBraces: false,
    separateISD: true,
    withISD: true,
    separator: EPhoneSeparator.SPACE,
    startsWith: EPhoneStartsWith.PLUS
});

/**
 * This method generates the random Phone number based on provided
 * configurations.
 * @param options: IPhoneOptions
 * @returns string
 */
export const phoneNo = (options: IPhoneOptions = DEFAULTS()): string => {

    const {
        countries, format, isdInBraces, separateISD,
        withISD, separator, startsWith
    } = deepMergeObject(DEFAULTS(), options);

    let isd = withISD ? randomItem(countries).isdCode : '';

    // Get random Local number
    let local = xToNum(new Array(randomNum(EPhoneLength.MIN - isd.length, EPhoneLength.MAX - isd.length) + 1).join('x'));

    // Group and Fill Spaces as per Options provided
    if (format !== EPhoneFormats.PLAIN && separator !== EPhoneSeparator.NON) {
        local = local.replace(new RegExp(`(\\d{${format}})`, 'g'), `$1${separator}`).replace(/[^\d]$/, '');
    }

    if (isd) {
        // Wrap in Braces, if asked
        isd = `${isdInBraces ? '(' : ''}${startsWith}${isd}${isdInBraces ? ')' : ''}`;
        // Add Separator as per configuration
        isd += !separateISD && separator === EPhoneSeparator.NON && format !== EPhoneFormats.PLAIN ? '' : separator;
    }

    return isd + local;
};