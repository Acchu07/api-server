import { buildURLPrice } from "./buildpriceURL.ts";
import type { optionsURL, coinData } from "./types/helperTypes.ts";
import { saveCoinInfo } from "../db/saveCoinInfo.ts";

export async function storeCryptoStats(){
    const urlOptions : optionsURL = {
        pathname: '/api/v3/simple/price',
        vsCurrencies: ["usd"],
        ids: ["bitcoin","ethereum","matic-network"],
        include_market_cap: 'true',
        include_24hr_change: 'true'
    }

    // Separate fetch and data manipulation to two separate functions? Think later

    const url = buildURLPrice(urlOptions)
    const response = await fetch(url)
    const data = await response.json()
    
    const arrayCoinsData: Array<coinData> = []
    const objectKeys: Array<string> = Object.keys(data)
    objectKeys.forEach((key) => {
        const coinsData: coinData = {
            coin: key,
            usd: data[key].usd,
            usd_market_cap: data[key].usd_market_cap,
            usd_24h_change: data[key].usd_24h_change,
            timestamp: new Date()
        }
        arrayCoinsData.push(coinsData)
    })

    await saveCoinInfo(arrayCoinsData)    
}
