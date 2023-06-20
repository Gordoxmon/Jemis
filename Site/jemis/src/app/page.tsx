"use client";
import { useState } from "react";

export default function Home() {
  const [n, setN] = useState(0);
  const sum = () => {
    setN(n + 1);
    return n;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        type="button"
        className="bg-slate-500 w-96 h-96 text-9xl"
        onClick={sum}
      >
        {n}
      </button>
    </main>
  );
}
