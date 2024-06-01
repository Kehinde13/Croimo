import React from "react";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoIosReturnRight } from "react-icons/io";
import { IoIosReturnLeft } from "react-icons/io";

const RecentTransactions = () => {
  const RecentTransactionsArr = [
    {
      narative: "Exchanged USD to CFA",
      time: "2:30 pm, today",
      amount: "$2100",
      status: "pending",
      icon: "Exchange"
    },

    {
      narative: "Sent to $Crotag",
      time: "2:30 pm, today",
      amount: "$1500.99",
      status: "cancelled",
      icon: "sent"
    },

    {
      narative: "Funded wallet",
      time: "2:30 pm, today",
      amount: "$130.29",
      status: "successfull",
      icon: "received"
    },

    {
      narative: "Exchanged CFA to USD",
      time: "5:06 am, today",
      amount: "$3,270.80",
      status: "cancelled",
      icon: "Exchange"
    },

    {
      narative: "Withdrawal",
      time: "2:30 pm, today",
      amount: "$1,500.30",
      status: "successfull",
      icon: "sent"
    },
    {
      narative: "Funded wallet",
      time: "2:30 pm, today",
      amount: "$130.29",
      status: "successfull",
      icon: "received"
    },

    {
      narative: "Exchanged CFA to USD",
      time: "5:06 am, today",
      amount: "$3,270.80",
      status: "cancelled",
      icon: "Exchange"
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-xl text-black font-semibold">
          Recent Transactions
        </h1>
        <p className="text-[#3f9f98] font-semibold">View all</p>
      </div>

      <div className="p-5 bg-white rounded-md mt-5">
        {RecentTransactionsArr.map((transaction) => (
          <div className="flex justify-between mb-5" key={transaction.amount}>
            <div className="flex gap-3">
              {
                transaction.icon === "sent" 
                ? <IoIosReturnRight className="text-3xl mt-2 text-green-300 p-1 rounded-full bg-green-100" />
                : transaction.icon === "received"
                ? <IoIosReturnLeft className="text-3xl mt-2 text-red-300 p-1 rounded-full bg-red-100" />
                : <MdOutlineCurrencyExchange className="text-3xl mt-2 text-gray-300 p-1 rounded-full bg-gray-100" />
              }
              <div>
                <h1 className="text-black">{transaction.narative}</h1>
                <p className="text-sm">{transaction.time}</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-black">{transaction.amount}</h1>
              <p
                className={`text-xs text-right 
              ${
                transaction.status === "pending"
                  ? "text-orange-400"
                  : transaction.status === "successfull"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
