import React from "react";
interface myprops {
  children: React.ReactNode;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: any;
}

const InputText = ({ children, ...props }: myprops) => {
  return (
    <label htmlFor={props.id} className="font-medium dark:text-zinc-300 pb-2">
      {children}
      <input
        type="email"
        className="w-full py-3 px-4 font-semibold text-black outline outline-1 outline-zinc-800   hover:text-white hover:bg-zinc-900 focus:text-white focus:bg-zinc-900 dark:text-zinc-100 dark:bg-zinc-900 dark:outline-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 dark:focus:bg-zinc-100 dark:focus:text-zinc-900 rounded-lg border-zinc-200 hover:shadow inline-flex space-x-2 items-center justify-center"
        {...props}
      />
    </label>
  );
};

export default InputText;
