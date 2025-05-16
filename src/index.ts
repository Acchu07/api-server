import express from "express";
import { connectToMongo } from "./db/connectMongoDBCommunity.ts";
// import populateDB from "./scripts/tempData.ts";
// import { storeCryptoStats } from "./function/storeCryptoStats.ts";

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(process.env.PORT, async () => {
    await connectToMongo();
    // await populateDB();
    // await storeCryptoStats();
    console.log(`Server started on port ${process.env.PORT}`);
});
