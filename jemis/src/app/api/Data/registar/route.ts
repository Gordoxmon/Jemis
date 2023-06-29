import { NextResponse } from "next/server";
import { InsertUser, ReadUser } from "../mongodb/mongo";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  let data = await InsertUser();
  let result = await data.find().toArray();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const re_password = searchParams.get("repassword");
  if (
    result.map((user: any) => {
      user.email = email;
    })
  ) {
    if (password === re_password) {
      const user = {
        email,
        password,
      };

      data.insertOne(user);
      redirect("/login");
    }
  }
}
