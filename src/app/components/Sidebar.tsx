import React from "react";
import { MdDashboard } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { FaCreditCard } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden sm:block h-full w-[25%] p-10">
      <h1 className="mb-10 text-2xl text-[#368781] font-semibold">Croimo</h1>

      <ul className="flex flex-col gap-5 sidebar">
        <Link href="/">
          <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
            <MdDashboard className="self-center text-xl" />
            Dashboard
          </li>
        </Link>

        <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
          <SiConvertio className="self-center text-xl" />
          Convert Funds
        </li>
        <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
          <FaWallet className="self-center text-xl" />
          Wallets
        </li>
        <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
          <GrTransaction className="self-center text-xl" />
          Transactions
        </li>
        <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
          <FaCreditCard className="self-center text-xl" />
          Cards & Recipients
        </li>
        <Link href="/settings">
          <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
            <CiSettings className="self-center text-xl" />
            Settings
          </li>
        </Link>

        <li className="hover:text-[#368781] rounded-md p-3 hover:bg-[#ecf5f5] flex gap-2">
          <IoIosLogOut className="self-center text-xl" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
