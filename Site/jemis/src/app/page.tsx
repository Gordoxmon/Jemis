import { connectToDatabase, getDb } from "@/libs/mongoconn";

export default async function TestConnectionPage() {
  await connectToDatabase();

  const db = getDb();

  const collection = db.collection("Users"); // Substitua 'nomedacolecao' pelo nome da sua coleção

  const data = await collection.find().toArray();

  return (
    <main className="justify-center align-middle m-12 w-4/5 h-4/5 lg:-24 lg:w-3/5 lg:h-3/5">
      <div className="  w-full h-full p-4 sm:p-6 md:p-8 rounded-lg dark:bg-zinc-700 dark:border-zinc-900 ">
        <form className="flex gap-1 flex-col" action="#">
          <h1 className="justify-start text-5xl font-bold font-serif">Login</h1>
          <div className="grid-cols-2 ">
            <label htmlFor="Email" className="text-base font-medium">
              Email
            </label>
            <input type="text" name="Email" id="Email" />
            <label htmlFor="Email" className="text-base font-medium">
              Pass
            </label>
            <input type="text" name="Email" id="Email" />
          </div>
          <div className="flex gap-2 ">
            <input type="checkbox" name="rmeber" id="remeber" />
            <label htmlFor="Email" className="text-base font-medium"></label>
          </div>
        </form>
      </div>
    </main>
  );
}
/* <form action="" method="post">
        <section className="bg-white min-w-full max-w-2xl  grid grid-flow-row grid-cols-2  gap-2 p-3 text-start  ">
          <h1 className="col-span-2">Login</h1>
          <div className="col-span-2 flex flex-auto ">
            <label htmlFor="Email" className="mr-2 w-12">
              Email:
            </label>
            <input type="text" name="Email" id="Email" />
          </div>
          <div className="col-span-2 flex flex-auto ">
            <label htmlFor="Pass" className="mr-2 w-12">
              Pass:
            </label>
            <input type="text" name="Pass" id="Pass" />
          </div>
        </section>
      </form> */
