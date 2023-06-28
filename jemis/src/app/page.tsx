import Button from "@/libs/components/Button";
import Card from "@/libs/components/Card";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="justify-center align-middle m-8 w-4/5 h-4/5  lg:w-3/5 lg:h-3/5 font-sans text-black dark:text-white">
      <Link href="/login">login</Link>
      <Card title="Ola">
        <Button>asd</Button>
      </Card>

      <Link href="/register"> register</Link>
    </main>
  );
}
