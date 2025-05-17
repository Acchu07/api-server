import { getDb } from "./connectMongoDBCommunity.ts";
import type { Document } from "mongodb";

export async function retrieveCoinInfo(coinName: string): Promise<Document | null> {
    const dbKoinX = getDb();
    const coinInfo = await dbKoinX.collection('Coins')
    .find({coin: coinName})
    .sort({timestamp: -1})
    .limit(1)
    .toArray();
    return coinInfo[0];
}

export async function retrieveCoinInfoArray(coinName: string): Promise<Document[] | null> {
    const dbKoinX = getDb();
    const coinInfo = await dbKoinX.collection('Coins')
    .find({coin:coinName}, {projection:{usd:1, _id:0}})
    .sort({timestamp: -1})
    .limit(100)
    .toArray();
    return coinInfo;
}