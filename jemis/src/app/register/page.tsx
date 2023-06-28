import Button from "@/app/components/server/Button";
import Card from "@/app/components/server/Card";
import InputText from "@/app/components/server/InputText";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="justify-center align-middle  w-4/5 h-4/5  lg:min-w-3/5 lg:min-h-3/5 font-sans text-black">
      <Card title="Register">
        <form action="" className="my-6">
          <div className="flex flex-col space-y-5">
            <InputText
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            >
              Email
            </InputText>
            <InputText
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            >
              Password
            </InputText>
            <InputText
              id="repassword"
              name="repassword"
              type="password"
              placeholder="Re-password"
              required
            >
              Re-Password
            </InputText>
            {/* <div className="flex flex-row justify-between">
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
            </div> */}
            <Button>
              <span>Register</span>
            </Button>
            <p className="text-center dark:text-zinc-100">
              Already registed?{" "}
              <Link
                href="/login"
                className="text-zinc-500 font-medium inline-flex space-x-1 items-center"
              >
                <span>Login now </span>
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </main>
  );
}
