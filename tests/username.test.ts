import { clrExpected, clrValue } from './helpers';
import { username } from "../src/username";

describe('[Username]', () => {

    const username1 = username();
    test(`Should have ${clrExpected('Person name')} by default [ ${clrValue(username1)} ]`, () => {
        expect(username1).toMatch(new RegExp(`^[a-z\\d]+`));
    });

    const username2 = username({ randomChars: true, personName: false });
    test(`Should have ${clrExpected('Random characters')} [ ${clrValue(username2)} ]`, () => {
        expect(username2).toMatch(new RegExp(`^[a-z\\d]+`));
    });

    const username3 = username({ fullstop: true, hyphen: true, personName: true });
    test(`Should have ${clrExpected('Period (.) or Hyphen (-) in user name')} [ ${clrValue(username3)} ]`, () => {
        expect(username3).toMatch(new RegExp(`^([a-z\\d]+(\\.|\\-))+[a-z\\d]+`));
    });

    const username4 = username({ underscore: true });
    test(`Should have ${clrExpected('Underscore with random username & Company domain')} [ ${clrValue(username4)} ]`, () => {
        expect(username4).toMatch(new RegExp(`^([a-z\\d]+\\_)+[a-z\\d]+`));
    });
});