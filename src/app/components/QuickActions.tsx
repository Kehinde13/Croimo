import React from "react";
import { IoIosSend } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";

const QuickActions = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl text-black font-semibold">Quick Actions</h1>

      <div className="flex justify-between gap-5 mt-2">
        <div className="text-xl font-semibold flex justify-around rounded-md bg-white p-4 text-[#393a7d] w-[50%]">
        <IoIosSend className="text-3xl"/>
        Send Money
        </div>

        <div className="text-xl font-semibold flex justify-around rounded-md bg-white p-4 text-[#3f9f98] w-[50%]">
        <IoMdAddCircle className="text-3xl"/>
        Add Money
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
