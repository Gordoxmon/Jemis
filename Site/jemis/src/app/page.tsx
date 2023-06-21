import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a className="flex text-slate-200" href="./about">
        about page
      </a>
    </main>
  );
}
