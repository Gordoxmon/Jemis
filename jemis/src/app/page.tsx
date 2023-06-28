import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InputText from "@/app/components/InputText";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="justify-center align-middle m-8 w-4/5 h-4/5  lg:w-3/5 lg:h-3/5 font-sans text-black dark:text-white">
      <Link href="/login">login</Link>
      <Card title="Ola">
        <InputText
          id="1"
          name="1"
          className="w-full py-3 border text-black border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
        >
          1
        </InputText>
      </Card>

      <Link href="/register"> register</Link>
    </main>
  );
}
