import React from "react";
import Image from "next/image";
import { IoMdAddCircle } from "react-icons/io";
import Profile from "../assets/profile.jpg";

const SavedRecipient = () => {
  const SavedRecipientArr = ["Scallet", "Nariya", "Riya", "Tassy O"];

  return (
    <div className="mt-10 font-semibold">
      <h1 className="text-xl text-black mb-5">Saved Recipients</h1>

      <div className="flex text-white gap-5">
        <div className="bg-[#3f9f98] w-[15%] text-center rounded-2xl h-32 p-5">
          <IoMdAddCircle className="text-2xl mx-auto mb-3" />
          <p className="text-sm">New Recipient</p>
        </div>

        {SavedRecipientArr.map((name) => (
          <div
            key={name}
            className="bg-white text-black w-[15%] text-center rounded-2xl h-32 p-5"
          >
            <Image src={Profile} alt="profilePic" className="rounded-full" />
            <p className="text-xs">{name}</p>
            <p className="text-xs text-gray-300">$Cro tag</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipient;
