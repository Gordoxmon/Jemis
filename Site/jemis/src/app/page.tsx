import { connectToDatabase, getDb } from "@/libs/mongoconn";

export default async function TestConnectionPage() {
  await connectToDatabase();

  const db = getDb();

  const collection = db.collection("Users"); // Substitua 'nomedacolecao' pelo nome da sua coleção

  const data = await collection.find().toArray();

  return (
    <main className="flex m-4 w-3/4 dark:text-blue-950 justify-center h-3/4">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:bg-zinc-800 dark:border-zinc-900 w-1/2">
        <form className="space-y-6" action="#">
          <h1 className="text-5xl font-semibold text-gray-200 ">Login</h1>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-200 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 shadow-md shadow-yellow-400 "
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-50">
            Not registered?{" "}
            <a
              href="#"
              className="text-neutral-900 hover:underline dark:text-yellow-500 dark:hover:underline dark:decoration-yellow-700 dark:hover:text-yellow-700"
            >
              Create account
            </a>
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
