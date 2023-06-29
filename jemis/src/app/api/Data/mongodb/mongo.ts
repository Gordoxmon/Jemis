import { MongoClient, Db, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;

let client: typeof MongoClient;
let db: typeof Db;

/* setup do client da base de dados */

async function Conn(collectionName: string) {
  try {
    /* declração de variavel de conexão */
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        useUnifiedTopology: true,
        deprecationErrors: true,
      },
    });

    /* conexão a base de dados */
    await client.connect();
    db = client.db(dbName);

    /* verificação se a coleção existe */
    const collection = await db.listCollections().toArray();
    if (
      collection.filter((c: { name: string }) => c.name === collectionName)
        .length === 1
    ) {
      let data = db.collection(collectionName);
      return data;
    } else throw new Error("Collection não encontrado");
  } catch (err: any) {
    console.log(err.name + ": " + err.message);
  }
}

export const ReadDeleteUser = async () => {
  /* coneção a coleção */
  const data = await Conn("Users");
  let result = await data.find().toArray();
  return result;
};
export const InsertUser = async () => {
  /* retorna apenas a conexão, duvida se permanece, ou se damos importe apenas a conexão */
  return await Conn("Users");
};
export const ReadDeleteIndagacoes = async () => {
  /* coneção a coleção */
  const data = await Conn("Indagacoes");
  return await data.find().toArray();
};

export const InsertIndagacoes = async () => {
  /* retorna apenas a conexão, duvida se permanece, ou se damos importe apenas a conexão */
  return await Conn("Indagacoes");
};
