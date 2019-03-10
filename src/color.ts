import { randomItem, toTitleCase, deepMergeObject } from '@v8187/rs-utils';
import { randomWords } from './random';
import randomText from './static/random.text';
import colorsAllData from './static/colors-all.data';

export enum EColorFormat {
    NAME, HEX_CODE, RGB_PERCENT, RGB_NUMERIC
};

export interface IColorOptions {
    format?: EColorFormat;
};

export const colorDefaults = (): TRequired<IColorOptions> => ({
    format: EColorFormat.NAME
});

/**
 * Generates the random Color based on given parameters 
 * Color can be in English name, Hex code, RGB(percentage) or RGB(numeric) formats
 * 
 * @param options { IColorOptions }
 * @returns { string }
 */
export const color = (options: IColorOptions = colorDefaults()): string => {

    const ranColor = randomItem(colorsAllData);
    switch (options.format) {
        case EColorFormat.NAME: default: return ranColor.name;
        case EColorFormat.HEX_CODE: return ranColor.hexCode;
        case EColorFormat.RGB_NUMERIC: return ranColor.rgbValue;
        case EColorFormat.RGB_PERCENT: return ranColor.rgbPercent;
    }
};