"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AlignJustify, Command, LayoutGrid, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Desktop Navbar */}
      <div className="hidden lg:grid grid-cols-2 items-center text-white xl:mx-48 px-4">
        <div className="justify-self-start font-extrabold">
          <ul>
            <li className="flex items-center">
              <Image
                src="/Dakhyabg.png"
                alt="Logo"
                width={200}
                height={200}
                className="-ml-8"
              />
              <span className="text-sm xl:text-xl -ml-13 mb-5 ">
                Dakhya Financial Consultancy
              </span>
            </li>
          </ul>
        </div>
        <div className="justify-self-end flex gap-10 text-lg cursor-pointer items-center">
      <ul className="flex gap-10">
        {["home", "services", "about"].map((section) => (
          <li
            key={section}
            onClick={() => handleScroll(section)}
            className="relative hover:text-[#71A9F7] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#71A9F7] after:transition-all after:duration-300"
          >
            {section.charAt(0).toUpperCase() +
              section.slice(1).replace("contact", "Contact Me")}
          </li>
        ))}
      </ul>
      <Button
        className="bg-[#1C1E53] hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 text-sm xl:text-base px-4 xl:px-6"
        onClick={() => handleScroll("contact")} // Adjust to scroll to contact section
      >
        Contact Us
      </Button>
    </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between text-white px-4 py-4">
        <div className="flex items-center">
          <Image
            src="/DakhyabgCopy.png"
            alt="Logo"
            width={100}
            height={100}
            className="-ml-3"
          />
          {/* <span className='text-sm font-bold ml-2'>
            Dakhya Financial Consultancy
          </span> */}
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-3 hover:bg-white/10 rounded-full border backdrop-blur-2xl border-white/30 mb-2 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#131314] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 ">
          <div className="flex items-center -ml-10 ">
            {/* <Image src="/Dakhyabg.png" alt="Logo" width={120} height={120} /> */}
            {/* <span className='text-white font-bold ml-2 text-sm'>
              Dakhya Financial
            </span> */}
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-white/10  transition-colors duration-300 mt-2 ml-2"
          >
            <X size={30} className="text-white ml-10" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-6">
            <li>
              <a
                href="#"
                className="block text-white text-lg hover:text-[#71A9F7] transition-colors duration-300 py-2"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-white text-lg hover:text-[#71A9F7] transition-colors duration-300 py-2"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-white text-lg hover:text-[#71A9F7] transition-colors duration-300 py-2"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
            </li>
            <li className="pt-4">
              <Button
                className="w-full bg-[#1C1E53] hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 py-3"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
