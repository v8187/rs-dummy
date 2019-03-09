import { randomItem, deepMergeObject } from '@v8187/rs-utils';
import { personName, EPersonNameFormats } from './person-name';
import { company } from './company';
import { alphanumeric } from './alphanumeric';

const nameOptions = () => ({
    format: randomItem([
        EPersonNameFormats.NAME_INITIAL,
        EPersonNameFormats.NAME_SURNAME,
        EPersonNameFormats.NAME_INITIAL_SURNAME]),
    male: true,
    female: true
});

const RANDOM_OPTIONS = ['aaaa aa', 'aaa axxxx', 'axaxa xa', 'xxxx xx', 'xxxxxx xxxxx',
    'aaaaaa aaaaa', 'aaaxxaaa aaa', 'aaa aaaxxaa'];

export interface IUsernameOptions {
    personName?: boolean;
    randomChars?: boolean;
    fullstop?: boolean;
    underscore?: boolean;
    hyphen?: boolean;
};

export const usernameDefaults = (): TRequired<IUsernameOptions> => ({
    hyphen: false,
    fullstop: false,
    personName: true,
    randomChars: false,
    underscore: false
});

/** 
 * Generates Random Username based on given parameters
 * 
 * - Default options will be empty javaScript Object
 * - If Person name is Off, then random user Id will be used by default
 * - Special Characters (., -, _) all are optional and Off by default
 * 
 * @param options { IUsernameOptions }
 * @returns { string }
 */
export const username = (options: IUsernameOptions = usernameDefaults()): string => {
    
    const temp = deepMergeObject(usernameDefaults(), options);

    let types: string[] = [], others: string[] = [];

    temp.personName && types.push('p');
    (temp.randomChars || !types[0]) && types.push('r');

    temp.fullstop && others.push('.');
    temp.hyphen && others.push('-');
    temp.underscore && others.push('_');

    const other = randomItem(others) || '';
    const username = randomItem(types) === 'p' ? personName(nameOptions()) : alphanumeric({ format: randomItem(RANDOM_OPTIONS) });

    return (`${replaceSpecial(username, ' ').trim().replace(/\s+/ig, other)}`).toLowerCase();
};

const replaceSpecial = (value: string, replaceWith: string = ''): string => {
    return value.replace(/[^a-z\d]+/ig, replaceWith);
};