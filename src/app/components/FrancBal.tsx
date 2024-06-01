import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import france from "../assets/france.png";

const FrancBal = () => {
  return (
    <div className="bg-[#3f9f98] rounded-md text-white w-[48%] h-[150px] p-3 shadow-lg">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src={france} alt="flag" className="w-[10%] rounded-full" />
          XOF Wallet balance
        </div>
        <div className="bg-gray-200 rounded-full p-1">
          <IoIosArrowDown className="text-xl" />
        </div>
      </div>
      <h1 className="text-3xl mt-5">&#8355; 150.80</h1>
    </div>
  );
};

export default FrancBal;
