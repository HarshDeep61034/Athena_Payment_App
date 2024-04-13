"use client"
import Image from "next/image"
import { FaUser } from "react-icons/fa";
import qr from "../assets/qr.png"
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function(){
    const searchParams = useSearchParams()
    const token = searchParams.get('token');
    useEffect(()=>{
        async function fetchTrxn() {
            const res = await axios.get("http://localhost:3001/api/transaction");
        }
    })
    return (
        <div className="bg-slate-100 h-[100vh] flex justify-center items-center">
            <div className="border-2 w-[400px] h-[550px] border-black rounded-lg ">
               <Image className="mx-auto my-4 rounded-lg" src={qr} width={150} height={150} alt="transaction-qr" />  
              <div>
                <div className="flex text-2xl">
                    <FaUser className="relative top-1 mx-3 " /> User786123
                    </div>
                    <div className="mx-4 my-4">
                        <div className="flex my-3 justify-between">
                            <span>Available Balance</span> 
                            <span className="text-green-500">$2500</span>
                        </div>
                        <hr />
                        <div className="flex my-3 justify-between">
                            <span>Athena Payment App</span> 
                            <span className="text-red-500">-$500</span>
                        </div>
                        <hr />
                        <div className="flex my-3 justify-between">
                            <span>Remaining Balance</span> 
                            <span className="text-green-500">$2000</span>
                        </div>
                    </div>
                    <div className="mx-4 text-xl">
                    <span>Date: 23-jun-2024</span>
                    <br />
                    <span>{`Transaction Id: ${token}`}</span>
                    </div>
               </div>
               <div className="flex justify-center my-6">
               <button className="px-24 hover:bg-[#3b7cc6] text-white rounded-md p-2 bg-[#1d86ff]">Pay</button>
               </div>
            </div> 
        </div>
    )
}