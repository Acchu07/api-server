import { connect } from "nats";
import { storeCryptoStats } from "./function/storeCryptoStats.ts";

const nc = await connect({ servers: "nats://localhost:4222" });

const sub = nc.subscribe("trigger",{
    callback: (err, msg) => {
        if(err){
            console.log(err);
            return;
        }
        storeCryptoStats();
    }
});


// Add Error Handling for Nats server