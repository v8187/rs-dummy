import { randomItem, randomNum, deepMergeObject } from '@v8187/rs-utils';
import { randomAlphabet } from './random';

const SPECIAL_CHARS = '`-=[]\\;\',./~!@#$%^&*()_+{}|:"<>?';

export interface IPasswordOptions {
    upperCase?: boolean;
    lowerCase?: boolean;
    digit?: boolean;
    specialChar?: boolean;
    max?: number;
    min?: number;
};

export const passwordDefaults = (): TRequired<IPasswordOptions> => ({
    upperCase: false,
    lowerCase: false,
    digit: false,
    specialChar: false,
    max: 4,
    min: 10
});

/**
 * Generates random Password based on given parameters
 * 
 * @param options { IPasswordOptions }
 * @returns { string }
 */
export const password = (options: IPasswordOptions = passwordDefaults()): string => {

    const { upperCase, lowerCase, digit, specialChar, max, min } = deepMergeObject(passwordDefaults(), options);
    const len = randomNum(min, max);

    let pwd = '';

    while (pwd.length < len) {
        if (lowerCase && upperCase && digit && specialChar) {
            pwd += randomAny([0, 1, 2, 3]);
        } else if (lowerCase && upperCase && digit && !specialChar) {
            pwd += randomAny([0, 1, 2]);
        } else if (lowerCase && upperCase && !digit && specialChar) {
            pwd += randomAny([0, 1, 3]);
        } else if (lowerCase && !upperCase && digit && specialChar) {
            pwd += randomAny([0, 2, 3]);
        } else if (!lowerCase && upperCase && digit && specialChar) {
            pwd += randomAny([1, 2, 3]);
        } else if (lowerCase && !upperCase && !digit && specialChar) {
            pwd += randomAny([0, 3]);
        } else if (!lowerCase && upperCase && !digit && specialChar) {
            pwd += randomAny([1, 3]);
        } else if (!lowerCase && !upperCase && digit && specialChar) {
            pwd += randomAny([2, 3]);
        } else if (lowerCase && upperCase && !digit && !specialChar) {
            pwd += randomAny([0, 1]);
        } else if (lowerCase && !upperCase && digit && !specialChar) {
            pwd += randomAny([0, 2]);
        } else if (!lowerCase && upperCase && digit && !specialChar) {
            pwd += randomAny([1, 2]);
        } else if (lowerCase && !upperCase && !digit && !specialChar) {
            pwd += randomAny([0]);
        } else if (!lowerCase && upperCase && !digit && !specialChar) {
            pwd += randomAny([1]);
        } else if (!lowerCase && !upperCase && digit && !specialChar) {
            pwd += randomAny([2]);
        }
    }
    return pwd;
};

const randomAny = (list) => {
    switch (randomItem(list)) {
        case 0:
        default:
            return randomAlphabet();
        case 1:
            return randomAlphabet().toUpperCase();
        case 2:
            return randomNum(0, 9);
        case 3:
            return randomItem(SPECIAL_CHARS.split(''));
    };
}
