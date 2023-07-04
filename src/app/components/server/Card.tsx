import React from "react";

function Card({
  children,
  title,
  ...props
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className="max-w-4xl w-max mx-auto my-4 p-8 rounded-xl bg-white shadow-md shadow-zinc-700   dark:bg-zinc-800 dark:shadow-md dark:shadow-zinc-600 "
      {...props}
    >
      <h1 className="text-2xl font-bold antialiased dark:text-zinc-50">
        {title}
      </h1>
      {children}
    </div>
  );
}

export default Card;
