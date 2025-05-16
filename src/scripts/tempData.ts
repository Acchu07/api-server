import { getDb } from "../db/connectMongoDBCommunity.ts";

interface coinData{
    usd: number;
    usd_market_cap: number;
    usd_24h_change: number;
}

const bitCoinData: coinData = {
    usd: 103839,
    usd_market_cap: 2062969357345.2207,
    usd_24h_change: 0.7554404385616705
}

const bitCoinData2: coinData = {
    usd: 113839,
    usd_market_cap: 22,
    usd_24h_change: 55
}

const arrayBitCoinData : Array<coinData> = []
arrayBitCoinData.push(bitCoinData)
arrayBitCoinData.push(bitCoinData2)

export default async function populateDB(): Promise<void>{
    const dbKoinX = getDb();
    await dbKoinX.collection('Coins').insertMany(arrayBitCoinData);
}

