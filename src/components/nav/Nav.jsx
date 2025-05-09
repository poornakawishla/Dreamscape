import React from "react";
import Logo from "../../assets/logo.svg";
import Primarybutton from "../primarybutton/Primarybutton";

function Nav() {
  return (
 <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div className="fixed absolute mt-6 top-0 left-0 right-0 
    mx-auto w-[1080px] flex justify-between 
    bg-[var(--background-color-background)] 
    px-[24px] py-[22] rounded-[16px] items-center h-[88px]">
      <img className="h-8" src={Logo} alt="Logo" />
      <div className="flex items-center h-full gap-[32px] Body-B-2-Bold">
        <a
          href="#"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Home
        </a>
        <a
          href="#"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Designs
        </a>
        <a
          href="#"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          About Us
        </a>
        <Primarybutton buttonText="Contact us" buttonLink="/contact"/>
      </div>
    </div>
    </nav>
  );
}

export default Nav;
