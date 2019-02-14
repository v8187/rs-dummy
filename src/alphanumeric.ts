import { deepMergeObject } from '@v8187/rs-utils';
import { randomAlphaNum } from './random';

export interface IAlphanumeric {
    format?: string;
};

const DEFAULTS: IAlphanumeric = {
    format: ''
};

export const alphanumeric = (options: IAlphanumeric = DEFAULTS): string => {
    return randomAlphaNum(deepMergeObject({}, DEFAULTS, options.format));
};