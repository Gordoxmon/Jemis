import { connectToDatabase, getDb } from "@/libs/mongoconn";
import Modal from "./modal";
export default async function TestConnectionPage() {
  await connectToDatabase();

  const db = getDb();

  const collection = db.collection("Users"); // Substitua 'nomedacolecao' pelo nome da sua coleção

  const data = await collection.find().toArray();

  return (
    <main className="justify-center align-middle m-8 w-4/5 h-4/5  lg:w-3/5 lg:h-3/5 font-sans text-black">
      <div className="max-w-4xl mx-auto my-4 p-8 rounded-xl bg-white shadow-md shadow-zinc-700   dark:bg-zinc-800 dark:shadow-md dark:shadow-zinc-600">
        <h1 className="text-6xl font-bold antialiased dark:text-zinc-50 ">
          Login
        </h1>
        <form action="" className="my-6">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium dark:text-zinc-300 pb-2">
                Email address
              </p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
                placeholder="Enter email address"
              />
            </label>
            <label htmlFor="password">
              <p className="font-medium dark:text-zinc-300 pb-2">Password</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your password"
              />
            </label>
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className="dark:text-zinc-300">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 border-slate-200 focus:bg-zinc-200  m-1"
                  />
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="font-medium text-zinc-500">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="w-full py-3 font-semibold text-black outline outline-1 outline-zinc-800   hover:text-white hover:bg-zinc-900 dark:text-zinc-100 dark:outline-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 rounded-lg border-zinc-200 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
            <p className="text-center dark:text-zinc-100">
              Not registered yet?{" "}
              <a
                href="#"
                className="text-zinc-500 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
      <Modal />
    </main>
  );
}
