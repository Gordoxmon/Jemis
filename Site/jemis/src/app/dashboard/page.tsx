import { connectToDatabase, getDb } from "@/libs/mongoconn";

export default async function page() {
  await connectToDatabase();

  const db = getDb();

  const collection = db.collection("Users"); // Substitua 'nomedacolecao' pelo nome da sua coleção
  const data = await collection.find().toArray();
  console.log(data);
  console.log(
    data.filter((item: typeof data) => {
      if (item.teste) return item;
    })
  );

  return <div>page</div>;
}
