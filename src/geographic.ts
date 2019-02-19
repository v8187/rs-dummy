import { randomItem } from '@v8187/rs-utils';

import countries from './jsons/countries.data';
import states from './jsons/states.data';
import cities from './jsons/cities.data';

export const CONUTRIES_LIST = countries;
export const STATES_LIST = states;
export const CITIES_LIST = cities;

const countryNames = (options) => {
    return options && options.countries ? options.countries.map(country => country.code3) : [];
};

export interface ICountry {
    name: string;
    id?: string;
    isdCode: string;
    code2: string;
    code3?: string;
};

export interface IState {
    id: string;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
};

export interface ICountryBasedOptions {
    countries?: ICountry[];
};

export interface ICityOptions extends ICountryBasedOptions {
    states?: IState[];
};

export const country = (): string => {
    return randomItem(countries).name;
};

export const state = (options: ICountryBasedOptions = {}): string => {
    const countries = countryNames(options);
    const filtered = countries.length ? states.filter(state => countries.indexOf(state.country) !== -1) : states;
    return randomItem(filtered).name;
};

export const city = (options: ICityOptions = {}): string => {
    const countries = countryNames(options);
    const states = options && options.states ? options.states.map(state => state.id) : [];
    const filtered = (countries.length || states.length) ?
        cities.filter(cityItem => {
            return countries.indexOf(cityItem.country) !== -1 && states.indexOf(cityItem.state) !== -1;
        }) : cities;

    return randomItem(filtered).name;
};

export const latLong = (options: ICountryBasedOptions = {}): string => {
    const countries = countryNames(options);
    const filtered = countries.length ? cities.filter(city => countries.indexOf(city.country) !== -1) : cities;
    const random = randomItem(filtered)
    return `${random.latitude}, ${random.longitude}`;
};