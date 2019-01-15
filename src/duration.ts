import { randomNum } from '@v8187/rs-utils';

export const duration = (options?) => {
    let value = options.prefix || '';

    ['decades', 'years', 'months', 'weeks', 'days'
        , 'hours', 'minutes', 'seconds', 'miliseconds'].map(unitName => {
            const unit = options[unitName];
            if (unit.selected) {
                value += ` ${unit.prefix || ''} ${randomNum(unit.min, unit.max)}${unit.sufix || ''} `;
            }
        });
    return (value + (options.sufix || '')).replace(/\s+/g, ' ').trim();
}