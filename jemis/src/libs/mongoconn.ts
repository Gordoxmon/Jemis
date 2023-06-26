import dotenv from "dotenv";
import { MongoClient, Db, ServerApiVersion } from "mongodb";

dotenv.config();

// Agora você pode acessar as variáveis ​​do .env.local

const uri = process.env.MONGODB_URI; // URI de conexão do MongoDB
const dbName = process.env.DATABASE_NAME; // Nome do seu banco de dados
let client: typeof MongoClient;
let db: typeof Db;

export async function connectToDatabase(collectionName: string) {
  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    db = client.db(dbName);
    return db.collection(collectionName);
  } catch (err: any) {
    console.log("algo deu errado:" + err.messege);
  }
}
export async function closeDatabase() {
  await client.close();
}
