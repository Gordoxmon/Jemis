import { connectToDatabase, getDb } from "@/libs/mongoconn";

export default async function TestConnectionPage() {
  await connectToDatabase();

  const db = getDb();

  const collection = db.collection("Users"); // Substitua 'nomedacolecao' pelo nome da sua coleção

  const data = await collection.find().toArray();

  return (
    <main className="items-center justify-between overflow-x-scroll p-4 my-auto mx-auto sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24 min-w-max">
      <div className="min-w-full max-w-fit p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h1 className="2xl:text-4xl xl:text-2xl font-medium text-gray-900 dark:text-white">
            Login
          </h1>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
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
