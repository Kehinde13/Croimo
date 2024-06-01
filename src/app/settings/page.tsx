import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import profilePic from "../assets/profile.jpg";
import { IoIosCamera } from "react-icons/io";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col p-5 ml-4">
      <h1 className=" text-2xl mb-5 text-black">Account Settings</h1>
      <div className="flex justify-between">
        <ul className="bg-white py-10 px-5 flex flex-col gap-8 w-[20%] rounded-md sidebar h-[300px]">
          <li className="hover:text-[#368781] flex gap-4">
            <FaUser className="self-center text-xl" />
            Profile Info
          </li>
          <li className="hover:text-[#368781]  flex gap-4">
            <RiLockPasswordFill className="self-center text-xl" />
            Passwords
          </li>
          <li className="hover:text-[#368781]  flex gap-4">
            <FaBell className="self-center text-xl" />
            Notification
          </li>
          <li className="hover:text-[#368781]  flex gap-4">
            <GoVerified className="self-center text-xl" />
            Verification
          </li>
        </ul>

        <div className="w-[65%] bg-white p-8 rounded-md">
          <div className="flex gap-5">
            <div className="flex gap-3 hover:text-[#368781] cursor-pointer">
              <FaArrowLeft className="self-center" />
              <p className="mt-1">Go Back</p>
            </div>
            <h1 className="text-2xl text-black">Edit Profile</h1>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <Image
                className="rounded-full w-20 self-center"
                src={profilePic}
                alt="profile picture"
              />

              <div className="flex gap-5 ">
                <button className="flex border-dotted border-2 p-2 gap-5 self-start border-[#368781] rounded-md text-[#368781]">
                  <IoIosCamera className="self-center text-xl" />
                  Change Photo
                </button>
                <p className="mt-2 font-bold">Remove</p>
              </div>
            </div>
          </div>

          <form action="" className="flex flex-col mt-10">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Tessy Omah"
              className="bg-white mb-5 border-2 p-3 rounded-md"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="TessyOmah@gmail.com"
              className="bg-white mb-5 border-2 p-3 rounded-md"
            />

            <label htmlFor="number">Mobile Number</label>
            <input
              type="number"
              name="number"
              id=""
              placeholder="08123456789"
              className="bg-white mb-5 border-2 p-3 rounded-md"
            />

            <button disabled className="bg-blue-500 w-[30%] py-2 rounded-md">
                Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
