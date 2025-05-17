import express from "express";
import type { NextFunction, Request, Response } from "express-serve-static-core";
import { connectToMongo } from "./db/connectMongoDBCommunity.ts";
import populateDB from "./scripts/tempData.ts";

import "./service.ts"
import statsRouter from "./routes/stats.ts";
import deviationRouter from "./routes/deviation.ts";

const app = express();


app.use("/api/stats", statsRouter);
app.use("/api/deviation", deviationRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})


app.listen(process.env.PORT, async () => {
    await connectToMongo();
    await populateDB();
    console.log(`Server started on port ${process.env.PORT}`);
});
