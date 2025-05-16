import { MongoClient, Db } from 'mongodb';

const mongoUrl: string = process.env.MONGODB_URI as string;
const dbName: string = process.env.DB_NAME as string;
let dbKoinX: Db;
const client: MongoClient = new MongoClient(mongoUrl);


export async function connectToMongo(): Promise<void> {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    dbKoinX = client.db(dbName);
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

export function getDb(): Db {
    if (!dbKoinX) throw new Error('dbKoinX is not Initialized');
    return dbKoinX;
}