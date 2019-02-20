import { randomNum, deepMergeObject } from '@v8187/rs-utils';

const DURATION_UNITS = [
    'decades', 'years', 'months', 'weeks', 'days',
    'hours', 'minutes', 'seconds', 'miliseconds'];

interface IFix {
    sufix?: string; prefix?: string;
};

export interface IDUnit extends IFix {
    title?: string; selected?: boolean; min?: number; max?: number;
};

export interface IDurationOptions extends IFix {
    decades?: IDUnit; years?: IDUnit; months?: IDUnit; weeks?: IDUnit; days?: IDUnit;
    hours?: IDUnit; minutes?: IDUnit; seconds?: IDUnit; miliseconds?: IDUnit;
};

const DEFAULTS: TRequired<IDurationOptions> = {
    prefix: '', sufix: '',
    decades: { title: 'Decades', selected: false, min: 0, max: 9, sufix: 'Decades', prefix: '' },
    years: { title: 'Years', selected: false, min: 0, max: 1000, sufix: 'Years', prefix: '' },
    months: { title: 'Months', selected: false, min: 0, max: 11, sufix: 'Months', prefix: '' },
    weeks: { title: 'Weeks', selected: false, min: 0, max: 4, sufix: 'Weeks', prefix: '' },
    days: { title: 'Days', selected: true, min: 0, max: 29, sufix: 'Days', prefix: '' },
    hours: { title: 'Hours', selected: false, min: 0, max: 23, sufix: 'Hours', prefix: '' },
    minutes: { title: 'Minutes', selected: false, min: 0, max: 59, sufix: 'Minutes', prefix: '' },
    seconds: { title: 'Seconds', selected: false, min: 0, max: 59, sufix: 'Seconds', prefix: '' },
    miliseconds: { title: 'Miliseconds', selected: false, min: 0, max: 999, sufix: 'Miliseconds', prefix: '' }
};

export const duration = (options: IDurationOptions = DEFAULTS): string => {

    const temp = deepMergeObject({}, DEFAULTS, options);
    let value = temp.prefix;

    DURATION_UNITS.map(unitName => {
        const unit = temp[unitName];
        if (unit.selected) {
            value += ` ${unit.prefix || ''} ${randomNum(unit.min, unit.max)}${unit.sufix} `;
        }
    });
    return (value + (temp.sufix || '')).replace(/\s+/g, ' ').trim();
};