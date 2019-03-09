import { randomItem, toTitleCase, deepMergeObject } from '@v8187/rs-utils';
import { randomWords } from './random';

export const COMPANY_SUFIXES = [
    'Company', 'Corp.', 'Corporation', 'Inc.', 'Incorporated',
    'LLC', 'LLP', 'Ltd', 'Limited', /* 'Pvt. Ltd.', 'Private Limited', */
    'PC', 'Foundation', 'Institute', 'Associates', 'Industries', 'Consulting'];

export interface ICompanyOptions {
    min?: number; max?: number;
};

export const companyDefaults = (): TRequired<ICompanyOptions> => ({
    min: 2, max: 5
});

/**
 * Generates the random Company name based on given parameters 
 * options.min value must be >=2,
 * values lower than 2 will be ignored
 * 
 * @param options { ICompanyOptions }
 * @returns { string }
 */
export const company = (options: ICompanyOptions = companyDefaults()): string => {
    const { min, max } = deepMergeObject(companyDefaults(), options);

    return `${toTitleCase(randomWords(min > 2 ? min - 1 : 1, max - 1))} ${randomItem(COMPANY_SUFIXES)}`;
};