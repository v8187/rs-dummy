import { randomItem, deepMergeObject } from '@v8187/rs-utils';
import { personName, EPersonNameFormats } from './person-name';
import { company } from './company';
import { alphanumeric } from './alphanumeric';
import { username, IUsernameOptions, usernameDefaults } from './username';

export const PUBLIC_DOMAINS = [
    'google', 'gmail', 'yahoo', 'reddif', 'hotmail', 'outlook', 'gmx',
    'msnmail', 'facebook', 'ymail', 'aolmail', 'fastmail', 'hushmail', 'runbox'];

export const SUB_DOMAINS = ['com', 'ca', 'in', 'fa', 'org', 'net', 'es', 'cs', 'eu'];

export interface IEmailOptions extends IUsernameOptions {
    publicDomains?: boolean;
    companyDomains?: boolean;
};

export const emailDefaults = (): TRequired<IEmailOptions> => ({
    ...usernameDefaults(),
    publicDomains: true,
    companyDomains: false
});

/** 
 * Generates Random Email Id based on given parameters
 * 
 * - Default options will be empty javaScript Object
 * - If Company Domain if Off, then Public domain will be used by default
 * - Refer `./username.ts` for more details
 * 
 * @param options { IEmailOptions }
 * @returns { string }
 */
export const email = (options: IEmailOptions = emailDefaults()): string => {

    const temp = deepMergeObject(emailDefaults(), options);

    let domains: string[] = [];

    temp.companyDomains && domains.push('c');
    (temp.publicDomains || !domains.length) && domains.push('p');

    const domain = randomItem(domains) === 'p' ? randomItem(PUBLIC_DOMAINS) : company({ min: 2, max: 3 });

    return (`${username(temp)}@${replaceSpecial(domain)
        .replace(/\s+/ig, '')}.${randomItem(SUB_DOMAINS)}`).toLowerCase();
};

const replaceSpecial = (value: string, replaceWith: string = ''): string => {
    return value.replace(/[^a-z\d]+/ig, replaceWith);
};