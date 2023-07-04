import React from "react";
interface myprops {
  className?: string;
}
function Footer({ ...props }: myprops) {
  return <footer {...props}>Jemis</footer>;
}

export default Footer;
