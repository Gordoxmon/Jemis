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
        useUnifiedTopology: true,
        deprecationErrors: true,
      },
    });

    console.log(await client.connect());
    db = client.db(dbName);
    const collection = await db.listCollections().toArray();
    if (
      collection.filter((c: { name: string }) => c.name === collectionName)
        .length === 1
    ) {
      return db.collection(collectionName);
    } else throw new Error("Collection não encontrado");
  } catch (err: any) {
    console.log(err.name + ": " + err.message);
  }
}
export async function closeDatabase() {
  await client.close();
}
