import { randomItem } from '@v8187/rs-utils';
import { personName } from './person-name';
import { company } from './company';
import { randomAlphaNum } from './random';

const PUBLIC_DOMAINS = ['google', 'gmail', 'yahoo', 'ymail', 'reddif', 'hotmail',
    'outlook', 'msnmail', 'facebook', 'aolmail', 'fastmail', 'gmx', 'hushmail', 'runbox'];

const SUB_DOMAINS = ['com', 'ca', 'in', 'fa', 'org', 'net', 'es', 'cs', 'eu'];

const NAME_OPTIONS = {
    formats: [{ value: 'name-int' },
    { value: 'name-sur' },
    { value: 'name-int-sur' }],
    male: true,
    female: true
};

const RANDOM_OPTIONS = ['aaaa aa', 'aaa axxxx', 'axaxa xa', 'xxxx xx', 'xxxxxx xxxxx',
    'aaaaaa aaaaa', 'aaaxxaaa aaa', 'aaa aaaxxaa'];

export interface IEmailTOpions {
    publicDomains?: boolean;
    companyDomains?: boolean;
    personName?: boolean;
    randomChars?: boolean;
    period?: boolean;
    underscore?: boolean;
    hyphen?: boolean;
};

/* 
 * This method generates Random Email Id depends on given Options
 * 
 * Default options willbe empty javaScript Object
 * If Company Domain if Off, then Public domain will be used by default
 * If Person name is Off, then random user Id will be used by default
 * Special Characters (., -, _) all are optional and Off by default
 */
export const email = (options: IEmailTOpions = {}) => {

    let domains: string[] = [], types: string[] = [], others: string[] = [];

    options.companyDomains && domains.push('c');
    (options.publicDomains || !domains.length) && domains.push('p');

    options.personName && types.push('p');
    (options.randomChars || !types.length) && types.push('r');

    options.period && others.push('.');
    options.hyphen && others.push('-');
    options.underscore && others.push('_');

    const other = randomItem(others) || '';
    const domain = randomItem(domains) === 'p' ? randomItem(PUBLIC_DOMAINS) : company();
    const username = randomItem(types) === 'p' ? personName(NAME_OPTIONS) : randomAlphaNum(randomItem(RANDOM_OPTIONS));

    return (`${replaceSpecial(username, ' ').trim()
        .replace(/\s+/ig, other)}@${replaceSpecial(domain)
            .replace(/\s+/ig, '')}.${randomItem(SUB_DOMAINS)}`).toLowerCase();
};

const replaceSpecial = (value: string, replaceWith: string = ''): string => {
    return value.replace(/[^a-z\d]+/ig, replaceWith);
};