import type { Request, Response } from "express-serve-static-core";
import { retrieveCoinInfo } from "../db/retrieveCoinInfo.ts";

export async function getStats(req: Request, res: Response) {
    const coinInfo = await retrieveCoinInfo(req.query.coin as string);
    if (!coinInfo) {
        throw new Error("Coin not found");
    }

    const coinInfoToSend: {
        usd: number;
        usd_market_cap: number;
        usd_24h_change: number;
      } = {
        usd: coinInfo.usd,
        usd_market_cap: coinInfo.usd_market_cap,
        usd_24h_change: Number(coinInfo.usd_24h_change.toFixed(1)),
      };
      

    res.status(200).send(coinInfoToSend);    
}
