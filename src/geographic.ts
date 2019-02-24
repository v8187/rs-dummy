import { randomItem } from '@v8187/rs-utils';

import countriesData from './jsons/countries.data';
import statesData from './jsons/states.data';
import citiesData from './jsons/cities.data';

export const CONUTRIES_LIST = countriesData;
export const STATES_LIST = statesData;
export const CITIES_LIST = citiesData;

const countryNames = (options) => {
    return options && options.countries ? options.countries.map(country => country.code3) : [];
};

export interface ICountry {
    name: string;
    isdCode: string;
    code2: string;
    code3: string;
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

/**
 * Generates random Country name 
 * 
 * @returns { string }
 */
export const country = (): string => {
    return randomItem(countriesData).name;
};

/**
 * Generates random State/Provision name based on given Countries list
 * 
 * @param options { ICountryBasedOptions }
 * @returns { string }
 */
export const state = (options: ICountryBasedOptions = {}): string => {
    const countries = countryNames(options);
    const filtered = countries.length ? statesData.filter(state => countries.indexOf(state.country) !== -1) : statesData;
    return randomItem(filtered).name;
};

/**
 * Generates random City name based on given Countries and States list
 * 
 * @param options { ICityOptions }
 * @returns { string }
 */
export const city = (options: ICityOptions = {}): string => {
    const countries = countryNames(options);
    const states = options && options.states ? options.states.map(state => state.id) : [];
    const filtered = (countries.length || states.length) ?
        citiesData.filter(cityItem => {
            return countries.indexOf(cityItem.country) !== -1 && states.indexOf(cityItem.state) !== -1;
        }) : citiesData;

    return randomItem(filtered).name;
};

/**
 * Generates random Latitude/Longitude based on given Countries list
 * 
 * @param options { ICountryBasedOptions }
 * @returns { string }
 */
export const latLong = (options: ICountryBasedOptions = {}): string => {
    const countries = countryNames(options);
    const filtered = countries.length ? citiesData.filter(city => countries.indexOf(city.country) !== -1) : citiesData;
    const random = randomItem(filtered)
    return `${random.latitude}, ${random.longitude}`;
};