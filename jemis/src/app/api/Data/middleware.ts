import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
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

/* começo do desenvolvimento das funçoes da base de dados */

const Conn = async (collectionName: string) => {
  try {
    await client.connect();
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
};

const InsertUser = async (data: User) => {
  /* Conecção a collection */
  db = Conn("Users");
};
const ReadUser = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  /*  db = await Conn("Users");
  const fetched = await db.find({ email: data.email }).toArray();
  if (fetched.lenght != 0) {
    return;
  } else console.log("Email não encontrado"); */
};

const DeleteUser = async (data: User) => {
  /* Conecção a collection */
  db = Conn("Users");
};

const InsertIndagacao = async (data: Indagacoes) => {
  /* Conecção a collection */
  db = Conn("Indagacoes");
};

const DeleteIndagacao = async (data: Indagacoes) => {
  /* Conecção a collection */
  db = Conn("Indagacoes");
};

const ReadIndagacao = async (data: Indagacoes) => {
  /* Conecção a collection */
  db = Conn("Indagacoes");
};

/* fim do desenvolvimento das funçoes da base de dados */

export {
  InsertIndagacao,
  DeleteIndagacao,
  ReadIndagacao,
  ReadUser,
  DeleteUser,
  InsertUser,
};
