import dotenv from "dotenv";
import { MongoClient, Db } from "mongodb";

dotenv.config();

// Agora você pode acessar as variáveis ​​do .env.local

const uri = process.env.MONGODB_URI; // URI de conexão do MongoDB
const dbName = process.env.DATABASE_NAME; // Nome do seu banco de dados

let client: typeof MongoClient;
let db: typeof Db;

export async function connectToDatabase(): Promise<void> {
  try {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    db = client.db(dbName);
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error;
  }
}

export function getDb(): typeof Db {
  if (!db) {
    throw new Error(
      "Conexão com o banco de dados não estabelecida. Chame a função connectToDatabase primeiro."
    );
  }
  return db;
}

export async function closeDatabase(): Promise<void> {
  try {
    await client.close();
  } catch (error) {
    console.error("Erro ao fechar a conexão com o MongoDB:", error);
    throw error;
  }
}
