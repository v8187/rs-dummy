import { xToNum } from '@v8187/rs-utils';

export enum EMobileFormats {
    FORMAT00 = 'xxxxxxxxxx',
    FORMAT01 = '(xxx) xxx-xxxx',
    FORMAT02 = '1-xxx-xxx-xxxx',
    FORMAT03 = '0xxx xxx xxxx',
    FORMAT04 = '0x xx xx xx xx',
    FORMAT05 = '(0x) xxxx xxxx',
    FORMAT06 = '(0xx) xxxxxxxx',
    FORMAT07 = '(0xxx) xxxxxxxx',
    FORMAT08 = '(0xxxx) xxxxxxx',
    FORMAT09 = '0xx-xxx-xxxx',
    FORMAT10 = 'xxx-xxxx'
};

export interface IMobileOptions {
    format?: EMobileFormats;
};

type Required<T> = T extends object ? { [P in keyof T]-?: NonNullable<T[P]>; } : T;
// type DeepRequired<T, U extends object | undefined = undefined> =
//     T extends object
//     ? { [P in keyof T]-?: NonNullable<T[P]> extends NonNullable<U | Function | Class> ? NonNullable<T[P]> : DeepRequired<NonNullable<T[P]>, U>; }
//     : T;

const DEFAULTS: Required<IMobileOptions> = {
    format: EMobileFormats.FORMAT00
};

export const mobile = (options: IMobileOptions = DEFAULTS): string => {

    return xToNum(options.format || DEFAULTS.format);
};