import React from "react";
import Button from "./ButtonNav";

import Link from "next/link";

function Nav() {
  return (
    <nav className="flex flex-row justify-between gap-4 m-4">
      <form action="/api/data/sair">
        <Button>Sair</Button>
      </form>
      <form action="/api/data/delete">
        <Button>Apagar Conta</Button>
      </form>
      <Button>Apagar Conta</Button>
      <Button>
        <Link href="/dashboard/newquestion">Inserir indagação</Link>
      </Button>
    </nav>
  );
}

export default Nav;
