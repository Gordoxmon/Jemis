import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Button from "./components/server/Button";

export default async function Home() {
  if (!cookies().has("jwtToken")) {
    redirect("/login");
  }

  return (
    <main className="justify-center align-middle m-8 w-4/5 h-4/5  lg:w-3/5 lg:h-3/5 font-sans text-black dark:text-white">
      <form action="/api/data/sair" method="GET">
        <Button>Sair</Button>
      </form>
      <form action="/api/indagacoes/apagar" method="GET">
        <Button>apagar</Button>
      </form>
      <form action="/api/indagacoes/inserir" method="GET">
        <Button>inserir</Button>
      </form>
      <form action="/api/indagacoes/ler" method="GET">
        <Button>ler</Button>
      </form>
    </main>
  );
}
