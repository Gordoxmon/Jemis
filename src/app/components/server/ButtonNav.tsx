import React from "react";

interface component {
  children: React.ReactNode;
  id?: string;
  value?: number;
  name?: string;
}

const Button = ({ children, ...props }: component) => {
  return (
    <button
      className="w-fit h-fit p-3 font-bold  text-black outline outline-1 outline-zinc-800   hover:text-white hover:bg-zinc-900 dark:text-zinc-100 dark:outline-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 rounded-lg border-zinc-200 hover:shadow  space-x-2 items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
