import React from "react";
import { connectToDatabase, getDb } from "@/libs/mongoconn";
export default async function TestConnectionPage() {
  await connectToDatabase();

  const db = getDb();

  const collection = db.collection("Users"); // Substitua 'nomedacolecao' pelo nome da sua coleção

  const data = await collection.find().toArray();

  console.log("Documentos na coleção:", data);

  const adminDb = db.admin();

  const serverStatus = await adminDb.serverStatus();
  const connectionStatus = await adminDb.command({ connectionStatus: 1 });

  const connectionInfo = {
    serverStatus: serverStatus,
    connectionStatus: connectionStatus,
  };

  return (
    <div>
      <h1>Teste de conexão com o MongoDB</h1>
      <pre>{JSON.stringify(connectionInfo.serverStatus, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
