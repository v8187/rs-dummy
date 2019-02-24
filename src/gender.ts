import { randomItem } from '@v8187/rs-utils';

export enum EGenderFormat {
    SHORT_LOWER = 'm/f', SHORT_UPPER = 'M/F', FULL = 'Male/Female'
};

export interface IGenderOptions {
    format?: EGenderFormat;
}

export const genderDefaults: TRequired<IGenderOptions> = {
    format: EGenderFormat.FULL
};

/**
 * Generates the random Gender in below formats based on given parameters
 * 
 * @param options { IGenderOptions }
 * @returns { string }
 */
export const gender = (options: IGenderOptions = genderDefaults): string => {

    switch (options.format || genderDefaults.format) {
        case EGenderFormat.SHORT_LOWER:
            return randomItem(['m', 'f']);
        case EGenderFormat.SHORT_UPPER:
            return randomItem(['M', 'F']);
        case EGenderFormat.FULL:
        default:
            return randomItem(['Male', 'Female']);
    };
};