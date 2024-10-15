"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div className="text-lg flex justify-around items-center py-4 px-6 md:px-10 lg:px-16 transition-all duration-500">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold transition-all duration-500">
            <Link href="/">
              <p><span className="text-[#D22B2B]">Car</span>{" "}<span className="text-[#0818A8]">Masters</span></p>
            </Link>
          </div>
          <div></div>
          {/* Desktop Menu */}
          <ul className="hidden items-center 2xl:ml-96 xl:ml-20  lg:text-sm  lg:flex  md:hidden gap-9 text-gray-700 transition-all duration-500">
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/" onClick={closeMenu}>
                <span className="text-[#D22B2B]">
                  Home
                </span>
              </Link>
            </li>
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/How-It-Works" onClick={closeMenu}>
                <span className="text-[#0818A8]">
                  How It Works
                </span>
              </Link>
            </li>
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/Why-Choose-Us" onClick={closeMenu}>
                <span className="text-[#0818A8]">
                  Why Choose Us
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="lg:hidden transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-all duration-300 transform rotate-180 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-all duration-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Mobile Menu */}
        <ul
          className={`${showMenu ? "block" : "hidden"
            } lg:hidden absolute  top-16 right-6 bg-white z-[50] transition-all duration-500 w-80 h-96 flex flex-col justify-center items-center   `}
        >
          <li className="text-gray-500  hover:scale-105  ml-2 hover:text-black duration-200 link-underline">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="text-gray-500 mt-5 w-[505px]  xsm:w-52  ml-[5.5rem]  hover:scale-105 hover:text-black duration-200 link-underline">
            <Link href="/How-It-Works" onClick={closeMenu}>
              How It Works
            </Link>
          </li>
          <li className="text-gray-500 mt-5 w-[505px] xsm:w-52  ml-[4rem]  hover:scale-105 hover:text-black duration-200 link-underline">
            <Link href="/Why-Choose-Us" onClick={closeMenu}>
              Why Choose Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
