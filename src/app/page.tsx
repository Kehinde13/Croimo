import Image from "next/image";
import Card from "./components/Card";
import DollarBal from "./components/DollarBal";
import FrancBal from "./components/FrancBal";
import QuickActions from "./components/QuickActions";
import ConvertFunds from "./components/ConvertFunds";
import SavedRecipient from "./components/SavedRecipient";
import RecentTransactions from "./components/RecentTransactions";

export default function Home() {
  return (
    <main className=" min-h-screen p-5 ml-3">
      <h1 className="text-2xl text-black mb-4 font-semibold">Welcome back, Omah</h1>
      <div className="flex justify-between gap-5">
        <div className="w-[60%]">
          <div className="flex justify-between">
            <DollarBal />
            <FrancBal />
          </div>
          
          <QuickActions />
          <ConvertFunds />
          <SavedRecipient />
        </div>

        <div className="w-[40%]">
          <Card />
          <RecentTransactions />
        </div>
      </div>
    </main>
  );
}
