import { randomItem } from '@v8187/rs-utils';

export const gender = (options = { formats: [{ value: '' }] }): string => {

    switch (options.formats[0].value) {
        case 'mf':
            return randomItem(['m', 'f']);
        case 'MF':
            return randomItem(['M', 'F']);
        case 'malefemale':
        default:
            return randomItem(['Male', 'Female']);
    };
};