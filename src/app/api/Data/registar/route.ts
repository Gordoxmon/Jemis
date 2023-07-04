import { NextResponse } from "next/server";
import { InsertUser } from "../mongodb/mongo";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  let data = await InsertUser();
  const result_email = await data.find(
    {},
    { projection: { _id: 0, email: 1 } }
  );
  let result_id = await data.findOne(
    {},
    { sort: { _id: -1 }, projection: { _id: 1 } }
  );

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const re_password = searchParams.get("repassword");
  if (result_id ? true : false) {
    let _id = result_id._id + 1;
    if (
      result_email.map((email: any) => {
        email = email;
      })
    ) {
      if (password === re_password) {
        const user = {
          _id,
          email,
          password,
        };

        data.insertOne(user);
        redirect("/login");
      }
    }
  }
}
