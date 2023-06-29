import { NextResponse } from "next/server";
import { ReadUser } from "../mongodb/mongo";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  let xd = await ReadUser();
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  let data = xd.filter(
    (user: typeof xd) => user.email === email && user.password === password
  );
  data.map((x: typeof data) => {
    if (x.email === email && x.password === password) {
      console.log("ola");
      cookies().set({
        name: "jwtToken",
        value: process.env.JWT_SECRET as string,
        httpOnly: true,
        path: "/",
      });
    }
  });
  redirect("/");
}

function createJwtToken(
  payload: object,
  secret: string,
  expiresIn: string
): string {
  return jwt.sign(payload, secret, { expiresIn });
}
