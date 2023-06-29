import Card from "@/app/components/server/Card";

import Form from "@/app/components/server/From";

export default async function Home() {
  return (
    <main className="justify-center align-middle m-8 w-4/5 h-4/5  lg:w-3/5 lg:h-3/5 font-sans text-black">
      <Card title="Login">
        <Form />
      </Card>
    </main>
  );
}
