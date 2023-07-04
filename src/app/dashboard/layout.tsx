import { Metadata } from "next";
import Nav from "../components/server/Nav";
import Footer from "../components/server/Footer";
import Header from "../components/server/Header";

export const metadata: Metadata = {
  title: "Jemis - Dashboard",
  description: "Login page for Jemis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header className=" sticky top-0 m-4 w-full h-fit flex gap-8 justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-white">
        <Nav />
      </Header>

      {children}
      <Footer className=" fixed bottom-0 w-full h-fit flex gap-8 justify-center bg-zinc-100 dark:bg-zinc-800 " />
    </>
  );
}
