import { randomAlphaNum } from './random';

export const genAlphanumeric = (options?) => {
    return randomAlphaNum(options.format);
}