import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Button from "./components/server/Button";

export default async function Home() {
  if (!cookies().has("jwtToken")) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }

  return <></>;
}
