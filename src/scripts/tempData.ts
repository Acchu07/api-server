import { getDb } from "../db/connectMongoDBCommunity.ts";

interface coinData{
    coin: string;
    usd: number;
    usd_market_cap: number;
    usd_24h_change: number;
    timestamp: Date;
}

const bitCoinData: coinData = {
    coin: "bitcoin",
    usd: 40000,
    usd_market_cap: 2062969357345.2207,
    usd_24h_change: 0.7554404385616705,
    timestamp: new Date()
}

const bitCoinData2: coinData = {
    coin: "bitcoin",
    usd: 45000,
    usd_market_cap: 2062969357345.2207,
    usd_24h_change: 0.7554404385616705,
    timestamp: new Date()
}

const bitCoinData3: coinData = {
    coin: "bitcoin",
    usd: 50000,
    usd_market_cap: 2062969357345.2207,
    usd_24h_change: 0.7554404385616705,
    timestamp: new Date()
}
// ToDo Loop up to 100 with random data for deviation calculation only for bitcoin

const arrayBitCoinData : Array<coinData> = []
arrayBitCoinData.push(bitCoinData)
arrayBitCoinData.push(bitCoinData2)
arrayBitCoinData.push(bitCoinData3)

export default async function populateDB(): Promise<void>{
    const dbKoinX = getDb();
    await dbKoinX.collection('Coins').insertMany(arrayBitCoinData);
}

