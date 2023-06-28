import React from "react";

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="max-w-4xl mx-auto my-4 p-8 rounded-xl bg-white shadow-md shadow-zinc-700   dark:bg-zinc-800 dark:shadow-md dark:shadow-zinc-600">
      <h1 className="text-6xl font-bold antialiased dark:text-zinc-50">
        {title}
      </h1>
      {children}
    </div>
  );
}

export default Card;
