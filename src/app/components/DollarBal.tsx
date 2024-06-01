import React from "react";
import Image from "next/image";
import usa from "../assets/usa.png";
import { IoIosArrowDown } from "react-icons/io";

const DollarBal = () => {
  return (
    <div className="bg-[#393a7d] rounded-md text-white w-[48%] h-[150px] p-3 shadow-lg">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src={usa} alt="flag" className="w-[10%] rounded-full" />
          USD Wallet balance
        </div>
        <div className="bg-gray-200 rounded-full p-1">
          <IoIosArrowDown className="text-xl" />
        </div>
      </div>
      <h1 className="text-3xl mt-5">$ 31,627.80</h1>
    </div>
  );
};

export default DollarBal;
