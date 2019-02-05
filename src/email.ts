import { randomItem, randomNum } from '@v8187/rs-utils';
import { randomAlphabet } from './random';

const PUBLIC = ['google', 'gmail', 'yahoo', 'ymail', 'reddif', 'hotmail',
    'outlook', 'msnmail', 'facebook', 'aolmail', 'fastmail', 'gmx', 'hushmail', 'runbox'];

const SUB_DOMAINS = ['com', 'ca', 'in', 'fa', 'org', 'net', 'es', 'cs', 'eu'];

export const email = (options) => {

    const { personName, randomChars, comma, digits, hyphen, underscore,
        companyDomains, publicDomains } = options;
    let strEmail = '';

    return strEmail;
};