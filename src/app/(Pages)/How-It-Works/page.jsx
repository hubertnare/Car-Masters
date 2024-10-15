import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/logo/honda.png";
import logo2 from "../../assets/logo/volvo.png";
import logo3 from "../../assets/logo/jagu.png";
import logo4 from "../../assets/logo/niss.png";
import logo5 from "../../assets/logo/audi.png";
import logo6 from "../../assets/logo/acu.png";
import logo7 from "../../assets/logo/Bentley.png";
import logo8 from "../../assets/logo/BMW.png";
import logo9 from "../../assets/logo/Chevrolet.png";
import logo10 from "../../assets/logo/Koenigsegg.png";
import logo11 from "../../assets/logo/Tesla.png";
import logo12 from "../../assets/logo/Jeep.png";
import logo13 from "../../assets/logo/Ferrari.png";
import icon from "../../assets/icon.png";
import ico from "../../assets/ico.png";
import ic from "../../assets/ic.png";
import Image from "next/image";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
];

const SliderComponent = () => {
  return (
    <div className="mb-32">
      <div className="flex justify-center   ">
        <button className="bg-[#1572D3]  cursor-default bg-opacity-10 mt-16  text-[#1572D3] rounded-lg p-3 flex">
          HOW IT WORKS
        </button>
      </div>

      <div className="text-center text-5xl mt-20">
        Service with following 3 working steps
      </div>
      <div className="flex flex-col items-center justify-center mt-32 md:flex-row md:justify-center md:space-x-10">
        <div className="flex flex-col items-center cursor-pointer">
          <Image src={icon} alt="icon" />
          <p className="mt-5 font-black">Request a Quote</p>
          <p className="mt-3 text-center w-48">
            Share your car's details and the required service, and we'll provide you with a clear, competitive quote.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 cursor-pointer ">
          <Image src={ico} alt="icon" />
          <p className="mt-5 font-black">Approve and Schedule</p>
          <p className="mt-3 text-center w-60">
            Once you're happy with the quote, choose a convenient date and time for the service to begin.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 cursor-pointer ">
          <Image src={ic} alt="icon" />
          <p className="mt-5 font-black">Repair and Deliver</p>
          <p className="mt-3 text-center w-64">
            Our experts will get to work on your car, and once completed, we'll notify you for pickup or arrange delivery to your preferred location.
          </p>
        </div>
      </div>

      <Marquee className="mt-28">
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo}
              alt={`logo${index}`}
              className="  px-10 py-2 cursor-pointer"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SliderComponent;
