import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import Lista from "../components/client/Lista";
import {
  InsertIndagacoes,
  ReadDeleteIndagacoes,
} from "@/app/api/data/mongodb/mongo";

import jwt from "jsonwebtoken";

interface DecodedToken {
  _id: number;
  email: string;
}

async function page() {
  if (!cookies().has("jwtToken")) {
    redirect("/login");
  }
  const token = cookies().get("jwtToken");
  const decodedToken = decodeToken(token?.value);
  const dt = await InsertIndagacoes();
  const data = await dt.find({ User_id: decodedToken?._id }).toArray();

  return (
    <main className="grid gap-4 grid-flow-row  m-4 xl:grid-cols-4  md:grid-cols-2 grid-cols-1  ">
      <Lista data={data}></Lista>
    </main>
  );
}

function decodeToken(token: any): DecodedToken | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string); // Substitua 'chave-secreta' pela chave secreta usada para assinar o token
    return decoded as DecodedToken;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
}

export default page;
