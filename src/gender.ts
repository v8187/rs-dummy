import { randomItem } from '@v8187/rs-utils';

export enum EGenderFormat {
    SHORT_LOWER = 'm/f', SHORT_UPPER = 'M/F', FULL = 'Male/Female'
};

export interface IGenderOptions {
    format?: EGenderFormat;
}

const DEFAULTS: TRequired<IGenderOptions> = {
    format: EGenderFormat.FULL
};

export const gender = (options: IGenderOptions = DEFAULTS): string => {

    switch (options.format || DEFAULTS.format) {
        case EGenderFormat.SHORT_LOWER:
            return randomItem(['m', 'f']);
        case EGenderFormat.SHORT_UPPER:
            return randomItem(['M', 'F']);
        case EGenderFormat.FULL:
        default:
            return randomItem(['Male', 'Female']);
    };
};