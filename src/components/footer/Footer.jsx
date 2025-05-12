import React from "react";
import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div
      className="flex flex-col items-center 
      bg-[var(--background-color-background-hover)] 
      text-[var(--typo-color-text)] 
      px-[5%] py-[100px] gap-8 text-center"
    >
      <img className="h-8" src={Logo} alt="Logo" />

      <div className="flex gap-[24px] color ">
        <a href="#">About Us</a>
        <a href="#">Service</a>
        <a href="#">Designs</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Footer;
