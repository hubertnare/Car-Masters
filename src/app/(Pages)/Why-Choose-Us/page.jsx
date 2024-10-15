import Image from "next/image";
import React from "react";
import audi from "../../assets/audi.png";
import i from "../../assets/i.png";
import ii from "../../assets/ii.png";
import iii from "../../assets/iii.png";
import iiii from "../../assets/iiii.png";

const page = () => {
  const data = [
    {
      item: "Best price guaranteed",
      content: "We deliver premium car service at the most competitive prices",
      src: i,
    },
    {
      item: "Quotes and Assessments",
      content:
        "We provide transparent pricing with quotes and assessments for all car service needs",
      src: ii,
    },
    {
      item: "Expert Technicians",
      content: "Our skilled technicians are experienced in panel beating, body repairs, and all types of car maintenance, ensuring your vehicle gets the highest level of care",
      src: iii,
    },
    {
      item: "24/7 technical support",
      content:
        "Have a question or an issue during your service? Our support team is available around the clock to assist you.",
      src: iiii,
    },
  ];

  return (
    <div className=" xl:flex   xsm:flex-row items-center justify-between md:mx-auto md:mt-10 md:pb-5 md:mb-32 ">
      <div className="mb-8 md:mb-0 md:mr-8">
        <Image src={audi} alt="car" />
      </div>
      <div className="lg:mr-24">
        <div className="flex justify-center  ">
          <button className="bg-[#1572D3] cursor-default bg-opacity-10 mt-16  text-[#1572D3] rounded-lg p-3 flex">
            WHY CHOOSE US
          </button>
        </div>
        <div className="text-center text-5xl mt-20">
          Experience top-notch service and unbeatable value with our car service deals
        </div>
        <div className="mt-8 md:mt-16  p-3">
          {data.map((data, index) => (
            <div key={index} className="flex mt-4">
              <div>
                <Image src={data.src} alt="icon" width={70} height={70} />
              </div>
              <div className="ml-3">
                <p className="font-black text-xl md:text-2xl">{data.item}</p>
                <p className="text-lg md:text-xl">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
