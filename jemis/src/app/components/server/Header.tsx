import React from "react";
interface myprops {
  children: React.ReactNode;
  className?: string;
}

function Header({ children, ...props }: myprops) {
  return <header {...props}>{children}</header>;
}

export default Header;
