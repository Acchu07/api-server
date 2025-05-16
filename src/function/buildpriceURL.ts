import { optionsURL } from "./types/helperTypes";

export function buildURLPrice(urlOptions : optionsURL): string {

    const vsCurrency = 'vs_currencies'
    const id = 'ids'

    const baseURL = new URL('https://api.coingecko.com');
    baseURL.pathname = urlOptions.pathname;
    const vsCurrencies: Array<string> = urlOptions.vsCurrencies;
    const ids: Array<string> = urlOptions.ids;
   
    vsCurrencies.length > 1 ? baseURL.searchParams.append(vsCurrency, vsCurrencies.join(",")) : baseURL.searchParams.append(vsCurrency, vsCurrencies[0]);
    ids.length > 1 ? baseURL.searchParams.append(id, ids.join(",")) : baseURL.searchParams.append(id, ids[0]);
    baseURL.searchParams.append('include_market_cap', urlOptions.include_market_cap);
    baseURL.searchParams.append('include_24hr_change', urlOptions.include_24hr_change);
    return baseURL.toString();
}