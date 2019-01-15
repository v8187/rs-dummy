import { randomAlphaNum } from './random';

export const alphanumeric = (options?) => {
    return randomAlphaNum(options.format);
}