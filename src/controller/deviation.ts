import type { Request, Response } from "express-serve-static-core";
import { retrieveCoinInfoArray } from "../db/retrieveCoinInfo.ts";

export default async function getDeviation(req: Request, res: Response){
    const coinInfo = await retrieveCoinInfoArray(req.query.coin as string);
    if (!coinInfo) {
        throw new Error("Coin not found");
    }
    
    const coinUSD: Array<number> = coinInfo.map((coin) => coin.usd);
    const stdDev = calculatePopulationStdDev(coinUSD);
    res.status(200).send({"Deviation":stdDev});
}

function calculatePopulationStdDev(data: Array<number>) {
    const mean = data.reduce((sum, x) => sum + x, 0) / data.length;
    const squaredDiffs = data.map(x => Math.pow(x - mean, 2));
    const variance = squaredDiffs.reduce((sum, x) => sum + x, 0) / data.length;
    const stdDev = Number(Math.sqrt(variance).toFixed(2));
    return stdDev;
}