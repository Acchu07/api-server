import { getDb } from "../db/connectMongoDBCommunity.ts";
import type { coinData } from "../function/types/helperTypes.ts";

export async function saveCoinInfo(data: coinData[]):Promise<void> {
  const dbKoinX = getDb();
  await dbKoinX.collection('Coins').insertMany(data);
}