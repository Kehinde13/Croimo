import React from 'react'
import master from '../assets/master.png'
import { IoWifiSharp } from "react-icons/io5";
import Image from 'next/image';

const Card = () => {
  return (
    <div className="w-full h-[250px] bg-[#3f9f98] rounded-lg p-5 text-white
                         bg-gradient-to-r from-[#393a7d] to-[#3f9f98] shadow-lg">
           <div className="flex justify-between">
             <p>
              Virtual Card
             </p>

             <IoWifiSharp  className="text-xl"/>
           </div>

           <h1 className="text-2xl mt-10">
            4562 {" "} 1122 {" "} 4594 {" "} 7852
           </h1>

           <div className="flex justify-between mt-16">
            <div>
              Card Holder
              <p>Jack Peterson</p>
            </div>

            <div>
              Expires
              <p>11/22</p>
            </div>

            <Image 
              src={master}
              alt="mastercard"
              className="w-[15%] rounded-lg"
            />
           </div>
         </div>
  )
}

export default Card