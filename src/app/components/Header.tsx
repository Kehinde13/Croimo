import React from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaBell } from "react-icons/fa6";
import Image from "next/image";
import profilePic from "../assets/profile.jpg";

const Header = () => {
  return (
    <div className="p-4 flex justify-between">
      <div>pages / Dashboard</div>
      <label className="input flex gap-2 w-[30%] h-10 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-5"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="text" className="grow" placeholder="Type Here..." />
      </label>

      <div className="flex gap-8">
        <div className="flex text-lg gap-2">
          <TbMessageCircleQuestion className="text-2xl" />
          Need Help?
        </div>

        <FaBell className="text-2xl" />

        <div className="flex gap-2 mt-[-5px]">
          <Image
            className="rounded-full w-10 self-center"
            src={profilePic}
            alt="profile picture"
          />
          <p className="self-center">Tassy Omah</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
