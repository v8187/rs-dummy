import { randomItem, toTitleCase, deepMergeObject } from '@v8187/rs-utils';
import { randomAlphabet } from './random';
import maleNames from './jsons/person-male-names.data';
import femaleNames from './jsons/person-female-names.data';
import surNames from './jsons/person-surnames.data';

export enum EPersonNameFormats {
    NAME, SURNAME, NAME_SURNAME, SURNAME_NAME,
    NAME_INITIAL, NAME_INITIAL_SURNAME,
    NAME_SURNAME_INITIAL, SURNAME_NAME_INITIAL
};

export interface IPersonNameOptions {
    format?: EPersonNameFormats;
    male?: boolean;
    female?: boolean;
};

export const personNameDefaults = (): TRequired<IPersonNameOptions> => ({
    format: EPersonNameFormats.NAME_SURNAME,
    male: true,
    female: true
});

/**
 * Generates random Person Name based on given parameters
 * 
 * @param options { IPersonNameOptions }
 * @returns { string }
 */
export const personName = (options: IPersonNameOptions = personNameDefaults()): string => {

    const namesList: string[] = [],
        temp = deepMergeObject(personNameDefaults(), options);

    if (temp.male) {
        namesList.push(...maleNames);
    }
    if (temp.female) {
        namesList.push(...femaleNames);
    }

    switch (temp.format) {
        case EPersonNameFormats.NAME:
            return toTitleCase(randomItem(namesList));
        case EPersonNameFormats.NAME_INITIAL:
        default:
            return toTitleCase(`${randomItem(namesList)} ${randomAlphabet()}.`);
        case EPersonNameFormats.NAME_INITIAL_SURNAME:
            return toTitleCase(`${randomItem(namesList)} ${randomAlphabet()}. ${randomItem(surNames)}`);
        case EPersonNameFormats.NAME_SURNAME:
            return toTitleCase(`${randomItem(namesList)} ${randomItem(surNames)}`);
        case EPersonNameFormats.NAME_SURNAME_INITIAL:
            return toTitleCase(`${randomItem(namesList)} ${randomItem(surNames)} ${randomAlphabet()}.`);
        case EPersonNameFormats.SURNAME:
            return toTitleCase(randomItem(surNames));
        case EPersonNameFormats.SURNAME_NAME:
            return toTitleCase(`${randomItem(surNames)}, ${randomItem(namesList)}`);
        case EPersonNameFormats.SURNAME_NAME_INITIAL:
            return toTitleCase(`${randomItem(surNames)}, ${randomItem(namesList)} ${randomAlphabet()}.`);
    };
};