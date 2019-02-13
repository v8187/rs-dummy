import { randomItem, toTitleCase } from '@v8187/rs-utils';
import { randomWords } from './random';

const SUFIXES = ['Company', 'Corp.', 'Corporation', 'Inc.', 'Incorporated', 'LLC', 'LLP', 'Ltd', 'Limited', 'Pvt. Ltd.', 'Private Limited',
    'PC', 'Foundation', 'Institute', 'Associates', 'Industries', 'Consulting'];

export interface ICompanyOptions {
    min?: number;
    max?: number;
};

export const company = (options: ICompanyOptions = {}): string => {
    return `${toTitleCase(randomWords(options.min || 2, options.max || 5))} ${randomItem(SUFIXES)}`;
};