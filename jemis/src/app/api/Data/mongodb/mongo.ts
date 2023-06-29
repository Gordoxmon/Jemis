import { MongoClient, Db, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;

let client: typeof MongoClient;
let db: typeof Db;

/* setup do client da base de dados */

client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    useUnifiedTopology: true,
    deprecationErrors: true,
  },
});

export const ReadUser = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    const collection = await db.listCollections().toArray();
    if (
      collection.filter((c: { name: string }) => c.name === "Users").length ===
      1
    ) {
      let data = db.collection("Users");
      let result = await data.find().toArray();
      return result;
    } else throw new Error("Collection não encontrado");
  } catch (err: any) {
    console.log(err.name + ": " + err.message);
  }
};
export const InsertUser = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    const collection = await db.listCollections().toArray();
    if (
      collection.filter((c: { name: string }) => c.name === "Users").length ===
      1
    ) {
      let data = db.collection("Users");
      return data;
    } else throw new Error("Collection não encontrado");
  } catch (err: any) {
    console.log(err.name + ": " + err.message);
  }
};
export const ReadIndagacoes = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    const collection = await db.listCollections().toArray();
    if (
      collection.filter((c: { name: string }) => c.name === "Users").length ===
      1
    ) {
      let data = db.collection("Users");
      let result = await data.find().toArray();
      return result;
    } else throw new Error("Collection não encontrado");
  } catch (err: any) {
    console.log(err.name + ": " + err.message);
  }
};
