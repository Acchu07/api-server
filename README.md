# api-server

Ensure you are utilizing the respective software versions mentioned in the parent folder readme
Ensure you are in the correct working Dir when executing npm or node cmds

Steps To Get Started 
1. Rename the .env.example file to .env and fill in the required values mainly the api_key for the coingecko
2. Install the dependencies using the following command:
`npm install`

Following commands are if using linux more specifically debain-based if some other os refer to the respective doc for the respective software for commands

3. Start the MongoDB server - on linux on the off chance your mongoDB fails refer to this - https://stackoverflow.com/questions/60309575/mongodb-service-failed-with-result-exit-code

`sudo systemctl start mongod`

4. Start the nats-server

`nats-server`

5. Access the worker server folder and run `npm install` post which you launch it via `node publishUpdate.mjs`

6. Return back to this folder and run the server using the following command:

`npm run dev`
