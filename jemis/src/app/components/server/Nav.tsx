import React from "react";
import Button from "./ButtonNav";

import Link from "next/link";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
interface DecodedToken {
  _id: number;
  email: string;
}
function Nav() {
  const token = cookies().get("jwtToken");
  const decodedToken = decodeToken(token?.value);
  const id=decodedToken._id ;

  return (
    <nav className="flex flex-row justify-between gap-4 m-4">
      <form action="/api/data/sair">
        <Button>Sair</Button>
      </form>
      <form action="/api/data/delete">
        <Button id="_id" name="_id" value={id}>Apagar Conta</Button>
      </form>
      <Button>
        <Link href="/dashboard/newquestion">Inserir indagação</Link>
      </Button>
    </nav>
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

export default Nav;
