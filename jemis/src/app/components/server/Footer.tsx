import React from "react";
interface myprops {
  className?: string;
}
function Footer({ ...props }: myprops) {
  return <footer {...props}>Footer</footer>;
}

export default Footer;
