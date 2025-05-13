import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Primarybutton from "../primarybutton/Primarybutton";


function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div
        className="
          fixed absolute mt-6 top-0 left-0 right-0 
          flex justify-between
          bg-[var(--background-color-background)]
          px-[24px] py-[22] mx-[10%] rounded-[16px] items-center h-[88px]
          z-10
        "
      >
        {/* Logo */}
        <img className="h-8" src={Logo} alt="Logo" />

        {/* Navbar Links & Button */}
        <div className="flex items-center gap-8 Body-B-2-Bold">
          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex gap-8">
            <a
              href="#home"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Home
            </a>
            <a
              href="#designs"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Designs
            </a>
            <a
              href="#about"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              About Us
            </a>
          </div>

          {/* Contact Us Button (Hide on Mobile, Show on Desktop) */}
          <div className="hidden md:block">
            <Primarybutton buttonText="Contact us" buttonLink="/contact" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-black"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100 mx-[10%]" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-[10%] gap-6 p-6 pb-20 rounded-[16px] mt-25 z-20">
          <a href="#home" className="text-black hover:text-blue-600">
            Home
          </a>
          <a href="#designs" className="text-black hover:text-blue-600">
            Designs
          </a>
          <a href="#about" className="text-black hover:text-blue-600">
            About Us
          </a>
          {/* No Primarybutton in mobile menu */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
