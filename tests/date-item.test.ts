import { clrExpected, clrValue } from './helpers';
import { dateTime } from "../src/date-time";

describe('[DateTime]', () => {

    const dateTime1 = dateTime({ unixTimestamp: true });
    test(`Should return ${clrExpected('unix Timestamp')}  [ ${clrValue(dateTime1)} ]`, () => {
        expect(dateTime1).toMatch(/\d+/);
    });
    const dateTime2 = dateTime({ sqlTimeStamp: true });
    test(`Should return ${clrExpected('SQL Timestamp')}  [ ${clrValue(dateTime2)} ]`, () => {
        expect(dateTime2).toMatch(/\d+/);
    });
    // const dateTime2 = dateTime({ companyDomains: true, personName: true });
    // test(`Should have ${clrExpected('Company domain with Person name')} [ ${clrValue(dateTime2)} ]`, () => {
    //     expect(dateTime2).toMatch(new RegExp(`^[a-z\\d]+${RX_C_DOMAIN}`));
    // });

    // const dateTime3 = dateTime({ period: true, hyphen: true, personName: true });
    // test(`Should have ${clrExpected('Period (.) or Hyphen (-) in user name')} [ ${clrValue(dateTime3)} ]`, () => {
    //     expect(dateTime3).toMatch(new RegExp(`^[a-z\\d]+(\\.|\\-)[a-z\\d]+${RX_P_DOMAIN}`));
    // });

    // const dateTime4 = dateTime({ underscore: true, companyDomains: true });
    // test(`Should have ${clrExpected('Underscore with random username & Company domain')} [ ${clrValue(dateTime4)} ]`, () => {
    //     expect(dateTime4).toMatch(new RegExp(`^[a-z\\d]+\\_[a-z\\d]+${RX_C_DOMAIN}`));
    // });
});