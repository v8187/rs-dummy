import { randomItem, deepMergeObject } from '@v8187/rs-utils';
import { personName, EPersonNameFormats } from './person-name';
import { company } from './company';
import { alphanumeric } from './alphanumeric';

export const PUBLIC_DOMAINS = [
    'google', 'gmail', 'yahoo', 'reddif', 'hotmail', 'outlook', 'gmx',
    'msnmail', 'facebook', 'ymail', 'aolmail', 'fastmail', 'hushmail', 'runbox'];

export const SUB_DOMAINS = ['com', 'ca', 'in', 'fa', 'org', 'net', 'es', 'cs', 'eu'];

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

export interface IEmailOptions {
    publicDomains?: boolean;
    companyDomains?: boolean;
    personName?: boolean;
    randomChars?: boolean;
    fullstop?: boolean;
    underscore?: boolean;
    hyphen?: boolean;
};

export const emailDefaults = (): TRequired<IEmailOptions> => ({
    publicDomains: true,
    companyDomains: false,
    hyphen: false,
    fullstop: false,
    personName: true,
    randomChars: false,
    underscore: false
});

/** 
 * Generates Random Email Id based on given parameters
 * 
 * - Default options willbe empty javaScript Object
 * - If Company Domain if Off, then Public domain will be used by default
 * - If Person name is Off, then random user Id will be used by default
 * - Special Characters (., -, _) all are optional and Off by default
 * 
 * @param options { IEmailOptions }
 * @returns { string }
 */
export const email = (options: IEmailOptions = emailDefaults()): string => {

    const temp = deepMergeObject(emailDefaults(), options);

    let domains: string[] = [], types: string[] = [], others: string[] = [];

    temp.companyDomains && domains.push('c');
    (temp.publicDomains || !domains.length) && domains.push('p');

    temp.personName && types.push('p');
    (temp.randomChars || !types.length) && types.push('r');

    temp.fullstop && others.push('.');
    temp.hyphen && others.push('-');
    temp.underscore && others.push('_');

    const other = randomItem(others) || '';
    const domain = randomItem(domains) === 'p' ? randomItem(PUBLIC_DOMAINS) : company({ min: 1, max: 3 });
    const username = randomItem(types) === 'p' ? personName(nameOptions()) : alphanumeric(randomItem(RANDOM_OPTIONS));

    return (`${replaceSpecial(username, ' ').trim()
        .replace(/\s+/ig, other)}@${replaceSpecial(domain)
            .replace(/\s+/ig, '')}.${randomItem(SUB_DOMAINS)}`).toLowerCase();
};

const replaceSpecial = (value: string, replaceWith: string = ''): string => {
    return value.replace(/[^a-z\d]+/ig, replaceWith);
};