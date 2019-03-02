import { clrExpected, clrValue } from './helpers';
import { email } from "../src/email";

const DOMAINS = 'google|gmail|yahoo|ymail|reddif|hotmail|outlook|msnmail|facebook|aolmail|fastmail|gmx|hushmail|runbox';
const SUB_DOMAINS = 'com|ca|in|fa|org|net|es|cs|eu';

const RX_P_DOMAIN = `@(${DOMAINS}).(${SUB_DOMAINS})$`;
const RX_C_DOMAIN = `@[a-z]+.(${SUB_DOMAINS})$`;

describe('[Email]', () => {

    const email1 = email();
    test(`Should have ${clrExpected('random username and Public domain')} by default [ ${clrValue(email1)} ]`, () => {
        expect(email1).toMatch(new RegExp(`^[a-z\\d]+${RX_P_DOMAIN}`));
    });

    const email2 = email({ companyDomains: true, personName: true });
    test(`Should have ${clrExpected('Company domain with Person name')} [ ${clrValue(email2)} ]`, () => {
        expect(email2).toMatch(new RegExp(`^[a-z\\d]+${RX_C_DOMAIN}`));
    });

    const email3 = email({ fullstop: true, hyphen: true, personName: true });
    test(`Should have ${clrExpected('Period (.) or Hyphen (-) in user name')} [ ${clrValue(email3)} ]`, () => {
        expect(email3).toMatch(new RegExp(`^([a-z\\d]+(\\.|\\-))+[a-z\\d]+${RX_P_DOMAIN}`));
    });

    const email4 = email({ underscore: true, companyDomains: true });
    test(`Should have ${clrExpected('Underscore with random username & Company domain')} [ ${clrValue(email4)} ]`, () => {
        expect(email4).toMatch(new RegExp(`^([a-z\\d]+\\_)+[a-z\\d]+${RX_C_DOMAIN}`));
    });
});