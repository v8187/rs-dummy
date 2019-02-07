import { randomItem } from '@v8187/rs-utils';
import { randomWords } from './random';

const SUFIXES = ['Company', 'Corp.', 'Corporation', 'Inc.', 'Incorporated', 'LLC', 'LLP', 'Ltd', 'Limited', 'Pvt. Ltd.', 'Private Limited',
    'PC', 'Foundation', 'Institute', 'Associates', 'Industries', 'Consulting'];

export const company = () => {
    return `${randomWords(2, 5)} ${randomItem(SUFIXES)}`;
};