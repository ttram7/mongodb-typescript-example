// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
// to access collection outside of service
export const collections: { cities?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config(); // pulls in .env file so values can be accessed

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    // client being passed connection string which contains user credentials

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const citiesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);

    collections.cities = citiesCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${citiesCollection.collectionName}`);





}