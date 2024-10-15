"use client";
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#051C34] text-white p-12   px-6 md:px-12 lg:px-24 xl:px-32  md:text-sm ">
        <div className=" mx-auto flex flex-col md:flex-row justify-between min-w-fit ">
          <div className=" items-center mb-4  ">
            <div className="ml-4 mt-3 text-lg  mb-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <IoLocationOutline />
                  <p>NO1 LEEDS ROAD, L.I.S GWERU (OPP QUALITY GAS)</p>
                </div>
                <div className="flex items-center gap-2">
                  <LuPhone />
                  <p>+263 71 841 7027, +263 71 616 2431</p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailOutline />
                  <p>carmastersgw@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-2xl lg:text-lg lg:p-2 md:p-2">
            Follow Us
            <div className="flex gap-3 cursor-pointer mt-4  md:mt-2 lg:p-2 md:p-2">
              <AiOutlineFacebook className="hover:text-white text-gray-500" />
              <FaInstagram className="hover:text-white text-gray-500" />
              <AiOutlineYoutube className="hover:text-white text-gray-500" />
            </div>
          </div>
        </div>
        <div className="border-b border-gray-600 m-5 mt-12"></div>
        <div>
          <p className="ml-16 mt-10 lg:text-lg xsm:ml-0">
            Copyright 2024 ・ Car Masters, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

