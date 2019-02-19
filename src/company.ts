import { randomItem, toTitleCase, deepMergeObject } from '@v8187/rs-utils';
import { randomWords } from './random';

export const COMPANY_SUFIXES = [
    'Company', 'Corp.', 'Corporation', 'Inc.', 'Incorporated',
    'LLC', 'LLP', 'Ltd', 'Limited', 'Pvt. Ltd.', 'Private Limited',
    'PC', 'Foundation', 'Institute', 'Associates', 'Industries', 'Consulting'];

export interface ICompanyOptions {
    min?: number; max?: number;
};

const DEFAULTS: ICompanyOptions = {
    min: 2, max: 5
};

export const company = (options: ICompanyOptions = DEFAULTS): string => {
    const temp = deepMergeObject({}, DEFAULTS, options);

    return `${toTitleCase(randomWords(temp.min, temp.max))} ${randomItem(COMPANY_SUFIXES)}`;
};