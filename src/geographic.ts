import { randomItem } from '@v8187/rs-utils';

import countriesData from './static/countries5.data';
import statesData from './static/states.data';
import citiesData from './static/cities.data';

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
 * Generates random State/Province name based on given Countries list
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
    const optCountries = countryNames(options);
    const optStates = options && options.states ? options.states.map(state => state.id) : [];
    // const filtered = (optCountries.length || optStates.length) ?
    //     citiesData.filter(cityItem => {
    //         return optCountries.indexOf(cityItem.country) !== -1 && optStates.indexOf(cityItem.state) !== -1;
    //     }) : citiesData;

    let filtered: any[] = [];
    // If countries available
    if (optCountries.length) {
        /**
         * If States avialable, filter out states for given countries only
         */
        let filteredStates: string[] = [];

        if (optStates.length) {
            statesData.map(stateItem => {
                if (optCountries.indexOf(stateItem.country) !== -1 && optStates.indexOf(stateItem.id) !== -1) {
                    filteredStates.push(stateItem.id);
                }
            });

            if (filteredStates.length) {
                filtered = citiesData.filter(cityItem => filteredStates.indexOf(cityItem.state) !== -1);
            }
        }
        /**
         * If States not available in options OR
         * not found for given countries
         */
        if (!filteredStates.length) {
            filtered = citiesData.filter(cityItem => optCountries.indexOf(cityItem.country) !== -1);
        }
    }
    // If ONLY states available
    else if (!optCountries.length && optStates.length) {
        filtered = citiesData.filter(cityItem => optStates.indexOf(cityItem.state) !== -1);
    }
    // If both are not avialable
    else if (!optCountries.length && !optStates.length) {
        filtered = citiesData;
    }

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