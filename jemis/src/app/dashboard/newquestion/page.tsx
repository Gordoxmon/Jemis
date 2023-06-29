import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { InsertIndagacoes } from "../../api/data/mongodb/mongo";
import { redirect } from "next/navigation";
import Card from "@/app/components/server/Card";
import Button from "@/app/components/server/Button";
import InputText from "@/app/components/server/InputText";

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
  return (
    <form method="GET" action="/api/indagacoes/inserir">
      <div className="flex justify-between align-middle gp-4">
        <Card title="Indagação">
          <InputText type="text" id="name" name="name">
            Titulo
          </InputText>
        </Card>
      </div>
      <div className="flex flex-row justify-between align-middle gp-4">
        <Card title="1º Indagado">
          <div className="flex flex-col">
            <InputText
              type="text"
              id="nameObj1"
              name="nameObj1"
              placeholder="nome"
              required
            >
              Nome:
            </InputText>
            <InputText
              type="text"
              id="descObj1"
              name="descObj1"
              placeholder="descrição"
              required
            >
              Descrição:
            </InputText>
            <InputText
              type="text"
              id="res1Obj1"
              name="res1Obj1"
              placeholder="Valor especficação 1"
              required
            >
              Valor especficação 1:
            </InputText>
            <InputText
              type="text"
              id="res2Obj1"
              name="res2Obj1"
              placeholder="Valor especficação 2"
              required
            >
              Valor especficação 2:
            </InputText>
          </div>
        </Card>
        <Card title="Especificações">
          <div className="flex flex-col">
            <InputText
              type="text"
              id="specs1"
              name="specs1"
              placeholder="nome"
              required
            >
              Nome 1:
            </InputText>
            <InputText
              type="text"
              id="method1"
              name="method1"
              placeholder="Metodo"
              pattern="[<>]=?|"
              title="só pode usar < > <= >="
              required
            >
              Metodo 1:
            </InputText>
            <InputText
              type="text"
              id="specs2"
              name="specs2"
              placeholder="nome"
              required
            >
              Nome 2:
            </InputText>
            <InputText
              type="text"
              id="method2"
              name="method2"
              placeholder="Metodo"
              pattern="[<>]=?|"
              title="só pode usar < > <= >="
              required
            >
              Metodo 2:
            </InputText>
          </div>
        </Card>
        <Card title="2º Indagado">
          <div className="flex flex-col">
            <InputText
              type="text"
              id="nameObj2"
              name="nameObj2"
              placeholder="nome"
              required
            >
              Nome:
            </InputText>
            <InputText
              type="text"
              id="descObj2"
              name="descObj2"
              placeholder="descrição"
              required
            >
              Descrição:
            </InputText>
            <InputText
              type="text"
              id="res1Obj2"
              name="res1Obj2"
              placeholder="Valor especficação 1"
              required
            >
              Valor especficação 1:
            </InputText>
            <InputText
              type="text"
              id="res2Obj2"
              name="res2Obj2"
              placeholder="Valor especficação 2"
              required
            >
              Valor especficação 2
            </InputText>
          </div>
        </Card>
      </div>
      <div className="flex justify-between align-middle gp-4">
        <Card>
          <Button id="User_id" name="User_id" value={decodedToken?._id}>
            Inserir
          </Button>
        </Card>
      </div>
    </form>
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
