import { NextResponse } from "next/server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { InsertIndagacoes, InsertUser, ReadDeleteUser } from "../mongodb/mongo";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  const xd = await InsertIndagacoes();
  const xd1 = await InsertUser();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("_id");
  const _id:number=+id;
  xd.deleteOne({User_id: _id});
  xd1.deleteOne({_id: _id});



  cookies().set({
    name: "jwtToken",
    value: "",
    expires: new Date("2016-10-05"),
    path: "/", // For all paths
  });
  redirect("/");
}
