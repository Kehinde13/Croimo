import React from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import Image from "next/image";
import usa from "../assets/usa.png";
import { SiConvertio } from "react-icons/si";
import france from "../assets/france.png";

const ConvertFunds = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl text-black mb-5 font-semibold">Convert Funds</h1>

      <div className="bg-white w-[100%] py-10 px-5 rounded-md ">
        <div className="flex gap-5 justify-between">
        <div className="w-[100%]">
          <div className="flex justify-between">
            <h1 className="text-sm font-bold">You send</h1>
            <p className="text-xs">United states dollar</p>
          </div>

          <div className="border-2 rounded-md flex justify-between p-3 ">
            <h1 className="text-3xl font-bold text-black">3400</h1>
            <div className="bg-gray-200 flex justify-between gap-5 px-3 w-[30%] rounded-lg">
              <div className="flex justify-between gap-1">
                <Image src={usa} alt="usa" className="w-[50%] self-center" />
                <p className="text-xs font-semibold self-center">USD</p>
              </div>
              <IoCaretDownOutline className="w-[150%] font-bold text-black self-center" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SiConvertio className="text-[#3f9f98] text-2xl" />
        </div>

        <div className="w-[100%]">
          <div className="flex justify-between ">
            <h1 className="text-sm font-bold">Recipient receives</h1>
            <p className="text-xs">French Franc CFA</p>
          </div>

          <div className="border-2 rounded-md flex justify-between p-3 ">
            <h1 className="text-3xl font-bold text-black">389</h1>
            <div className="bg-gray-200 flex justify-between gap-5 px-3 w-[30%] rounded-lg">
              <div className="flex justify-between gap-1">
                <Image
                  src={france}
                  alt="france"
                  className="w-[50%] self-center"
                />
                <p className="text-xs font-semibold self-center">CFA</p>
              </div>
              <IoCaretDownOutline className="w-[150%] font-bold text-black self-center" />
            </div>
          </div>
        </div>
        </div>
        
        <div className="mt-5 flex justify-between ">
          <p className="text-sm font-bold text-black">1 USD = 23.45 CFA</p>

          <button className="py-3 px-5 bg-[#3f9f98] rounded-lg text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConvertFunds;
