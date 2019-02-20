import { randomAlphaNum } from './random';

export interface IAlphanumericOptions {
    format?: string;
};

const DEFAULTS: TRequired<IAlphanumericOptions> = {
    format: ''
};

export const alphanumeric = (options: IAlphanumericOptions = DEFAULTS): string => {
    return randomAlphaNum(options.format || DEFAULTS.format);
};