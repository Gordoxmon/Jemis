import { NextResponse } from "next/server";
import { InsertUser } from "../mongodb/mongo";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  const xd = await InsertUser();

  const data = await xd.findOne({ email: email, password: password });

  if (data ? true : false) {
    const payload = { _id: data._id, email: data.email };
    cookies().set({
      name: "jwtToken",
      value: createJwtToken(payload, process.env.JWT_SECRET as string, "1h"),
      expires: new Date(Date.now() + 1000 * 60 * 100),
      httpOnly: true,
      path: "/",
    });
  }
  redirect("/");
}
function createJwtToken(
  payload: object,
  secret: string,
  expiresIn: string
): string {
  return jwt.sign(payload, secret, { expiresIn });
}
