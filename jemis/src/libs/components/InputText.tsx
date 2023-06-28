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
        className="w-full py-3 border text-black border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
        {...props}
      />
    </label>
  );
};

export default InputText;
