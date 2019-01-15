import { randomItem, toTitleCase } from '@v8187/rs-utils';
import { randomAlphabet } from './random';
import maleNames from './jsons/person-male-names.data';
import femaleNames from './jsons/person-female-names.data';
import surNames from './jsons/person-surnames.data';

export const personName = (options) => {

    const format = options.formats[0];

    const namesList: string[] = [];
    if (options.genders.male) {
        namesList.push(...maleNames);
    }
    if (options.genders.female) {
        namesList.push(...femaleNames);
    }

    switch (format.value) {
        case 'name':
        default:
            return toTitleCase(randomItem(namesList));
        case 'sur':
            return toTitleCase(randomItem(surNames));
        case 'sur-name':
            return toTitleCase(`${randomItem(surNames)}, ${randomItem(namesList)}`);
        case 'name-int':
            return toTitleCase(`${randomItem(namesList)} ${randomAlphabet()}.`);
        case 'name-sur':
            return toTitleCase(`${randomItem(namesList)} ${randomItem(surNames)}`);
        case 'name-int-sur':
            return toTitleCase(`${randomItem(namesList)} ${randomAlphabet()}. ${randomItem(surNames)}`);
        case 'name-sur-int':
            return toTitleCase(`${randomItem(namesList)} ${randomItem(surNames)} ${randomAlphabet()}.`);
        case 'sur-name-int':
            return toTitleCase(`${randomItem(surNames)}, ${randomItem(namesList)} ${randomAlphabet()}.`);
    };
};
