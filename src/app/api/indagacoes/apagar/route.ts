import { NextResponse } from "next/server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { InsertIndagacoes } from "../../data/mongodb/mongo";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  const data = await InsertIndagacoes();

  const { searchParams } = new URL(req.url);
  const idtext = searchParams.get("id") as string;
  let id = +idtext;
  console.log(typeof id);
  let result = await data.deleteOne({ _id: id });
  // console.log(result);
  redirect("/");
}
