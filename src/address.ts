import { toTitleCase, randomNum, randomItem } from '@v8187/rs-utils';
import { randomWords, randomAlphabet } from './random';

const
    numSufix = () => randomItem(['#', 'No', 'No.', 'Number'])
    , numSufixEmpty = () => randomItem(['', '', '#', 'No', 'No.', 'Number'])
    , area = () => randomItem(['Sec.', 'Sector', 'Rd.', 'Rd', 'Road', 'Ave.', 'Ave', 'Av.', 'Av', 'Avenue'])
    , street = () => randomItem(['Gali', 'St.', 'St', 'Street'])
    , postoffice = () => randomItem(['PO Box', 'PO Box', 'P. O. Box'])
    , ranNumber = (addBy = true, min = 100, max = 9999) => {
        let partial = '';
        addBy = addBy && !!randomItem([0, 0, 1]);
        if (addBy) {
            partial = `${randomItem([randomAlphabet().toUpperCase(), randomNum(1, 999)])} / `;
        }
        return `${numSufixEmpty()} ${partial}${randomNum(min, max)}`;
    }
    , house = () => `${randomItem(['', 'H.', 'House', 'Ap.', 'Apartment', 'F.', 'Flat', 'Kothi', ''])} ${ranNumber()},`
    ;

export const address = (options?): string => {
    const addType: number = 2; // randomNum(1, 7);
    let address = '';
    switch (addType) {
        case 1:
        default:
            address = `${postoffice()} ${numSufix()} ${randomNum(1000, 9999)}, ${randomWords()}`;
            break;
        case 2:
            address = `${house()} ${randomWords()} ${street()}, ${randomWords()} ${area()}`;
            break;
        case 3:
            address = `${house()} ${street()} ${ranNumber(false, 1, 99)}, ${randomWords()} ${area()}`;
            break;
        case 4:
            address = `${house()} ${street()} ${ranNumber(false, 1, 99)}, ${area()} ${ranNumber(false, 1, 99)}`;
            break;
        case 5:
            address = `${house()} ${randomWords()} ${street()}, ${area()} ${ranNumber(false, 1, 99)}`;
            break;
        case 6:
            address = `${house()} ${randomWords()} ${area()}`;
            break;
        case 7:
            address = `${house()} ${area()} ${ranNumber(false, 1, 99)}`;
            break;
    };

    return toTitleCase(address.replace(/\s{2,}/g, ' ').trim());
}