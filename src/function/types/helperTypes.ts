export interface optionsURL{
    pathname: string;
    vsCurrencies: Array<string>;
    ids: Array<string>;
    include_market_cap: string;
    include_24hr_change: string;
}


export interface coinData{
    coin: string;
    usd: number;
    usd_market_cap: number;
    usd_24h_change: number;
    timestamp: Date;
}
