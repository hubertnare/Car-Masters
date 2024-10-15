import React from "react";
import Image from "next/image";
import car from "../../assets/red-merc.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";;

const Page = () => {
  return (
    <div className="image mb-32 ">
      {" "}
      <div className=" xsm:flex-col">
        {" "}
        <div className="m-8  lg:m-0  lg:pl-36">
          <div className="lg:mt-5">
            <p className="text-xl lg:text-5xl font-semibold md:w-96 lg:w-auto leading-loose text-wrap">
              Gear Up For The Best <br/> <span className="text-[#D22B2B]">Expert Service</span> You Can Trust
            </p>
            <p className="text-base lg:text-lg md:w-96 lg:w-auto mt-4 text-wrap">
              From routine maintenance to major repairs, we’ve got you covered. <br />
              Experience quality service that keeps your car in top shape and your mind at ease.
            </p>
            <p className="mt-2 font-semibold">
              <span className="text-3xl text-[#0818A8] text-center">Book Your Service Now!</span>
            </p>
          </div>
        </div>
        <Image
          src={car}
          alt="frame"
          height="120px"
          className="ml-auto mt-40 xsm:mt-0 scale-75"
        />
      </div>{" "}
      <div className="container md:flex-row  mx-auto lg:m bg-white shadow-lg shadow-[#95c0eb] flex flex-col lg:flex-row lg:items-center gap-6 border rounded-3xl p-3">
        <div className="flex items-center gap-2 md:border-r-2 ">
          <FaLocationDot size={40} className="text-gray-400" />
          <div className="mr-5">
            <p className="font-black text-lg lg:text-2xl"><span className="text-[#D22B2B]">Location</span></p>
            <p className="text-base lg:text-xl">NO1 LEEDS ROAD, L.I.S GWERU</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt size={40} className="text-gray-400" />
          <div className="mr-5">
            <p className="font-black text-lg lg:text-2xl"><span className="text-[#0818A8]">Open Hours</span></p>
            <p className="text-base lg:text-xl">Mon-Sat, 08:00-17:00</p>
          </div>
        </div>
        <button className="bg-[#D22B2B] rounded-lg px-6 text-white py-2 lg:ml-auto">
          Book Service
        </button>
      </div>
    </div>
  );
};

export default Page;
