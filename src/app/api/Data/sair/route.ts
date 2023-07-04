import { NextResponse } from "next/server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  cookies().set({
    name: "jwtToken",
    value: "",
    expires: new Date("2016-10-05"),
    path: "/", // For all paths
  });
  redirect("/");
}
