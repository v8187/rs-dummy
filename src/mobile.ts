import { xToNum } from '@v8187/rs-utils';

export const mobile = (options): string => {
    const format = options.formats[0];

    switch (format.value) {
        case 'xxxxxxxxxx':
        default:
            return xToNum('xxxxxxxxxx');
        case '(xxx) xxx-xxxx':
            return xToNum('(xxx) xxx-xxxx');
        case '1-xxx-xxx-xxxx':
            return xToNum('1-xxx-xxx-xxxx');
        case '(01xxxx) xxxxx':
            return xToNum('(01xxxx) xxxxx');
        case '(01xxx) xxxxxx':
            return xToNum('(01xxx) xxxxxx');
        case '(01x1) xxx xxxx':
            return xToNum('(01x1) xxx xxxx');
        case '(011x) xxx xxxx':
            return xToNum('(011x) xxx xxxx');
        case '(02x) xxxx xxxx':
            return xToNum('(02x) xxxx xxxx');
        case '03xx xxx xxxx':
            return xToNum('03xx xxx xxxx');
        case '055 xxxx xxxx':
            return xToNum('055 xxxx xxxx');
        case '056 xxxx xxxx':
            return xToNum('056 xxxx xxxx');
        case '070 xxxx xxxx':
            return xToNum('070 xxxx xxxx');
        case '07624 xxxxxx':
            return xToNum('07624 xxxxxx');
        case '076 xxxx xxxx':
            return xToNum('076 xxxx xxxx');
        case '07xxx xxxxxx':
            return xToNum('07xxx xxxxxx');
        case '0800 xxx xxxx':
            return xToNum('0800 xxx xxxx');
        case '08xx xxx xxxx':
            return xToNum('08xx xxx xxxx');
        case '0xxx xxx xxxx':
            return xToNum('0xxx xxx xxxx');
        case '(016x77) xxxx':
            return xToNum('(016x77) xxxx');
        case '(01xxx) xxxxx':
            return xToNum('(01xxx) xxxxx');
        case '0500 xxxxxx':
            return xToNum('0500 xxxxxx');
        case '0800 xxxxxx':
            return xToNum('0800 xxxxxx');
        case '0800 1111xx':
            return xToNum('0800 1111xx');
        case '0845 46 4x':
            return xToNum('0845 46 4x');
        case '0x xx xx xx xx':
            return xToNum('0x xx xx xx xx');
        case '(0x) xxxx xxxx':
            return xToNum('(0x) xxxx xxxx');
        case '(0xx) xxxxxxxx':
            return xToNum('(0xx) xxxxxxxx');
        case '(0xxx) xxxxxxxx':
            return xToNum('(0xxx) xxxxxxxx');
        case '(0xxxx) xxxxxxx':
            return xToNum('(0xxxx) xxxxxxx');
        case '(03xxxx) xxxxxx':
            return xToNum('(03xxxx) xxxxxx');
        case '0xx-xxx-xxxx':
            return xToNum('0xx-xxx-xxxx');
        case '1-xxx-xxx-xxxx':
            return xToNum('1-xxx-xxx-xxxx');
        case 'xxx-xxxx':
            return xToNum('xxx-xxxx');
    };
};