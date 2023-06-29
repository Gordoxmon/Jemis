"use client";
import Button from "@/app/components/server/Button";
import InputText from "@/app/components/server/InputText";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function From() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("@/app/api/login.ts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/result"); // Redireciona para a página 'ResultPage' após o envio do formulário
      } else {
        console.error("Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário", error);
    }
  };
  return (
    <form className="my-6" onSubmit={handleSubmit}>
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
          <span>Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </Button>
        <p className="text-center dark:text-zinc-100">
          Not registered yet?{" "}
          <Link
            href="/register"
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
                strokeWidth="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
}

export default From;
