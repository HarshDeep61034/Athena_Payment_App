"use client"
import Image from "next/image";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { useParams, useRouter, useSearchParams } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams()
 
  const token = searchParams.get('token');
  return (
    <div>
      <Appbar />
      <div className="w-[100vw] flex justify-center items-center">
      <form className="w-[500px] f" action="">
        <p className="text-xl my-3">Login to Netbanking</p>
        <div className="my-7 flex justify-between">
          <span>Customer ID/User ID</span> <input className="border-[1px] focus:border-blue-400 focus:border-2 outline-none p-2 py-1 rounded-md border-slate-400" type="text" />
        </div>
        <div className="my-7 flex justify-between">
        <span>Password/IPIN</span> <input className="border-[1px] focus:border-blue-400 focus:border-2 outline-none p-2 py-1 rounded-md border-slate-400" type="password" />
        </div>
        <div className="flex  justify-end">
        <button onClick={()=>router.push(`/transaction/?token=${token}`)} className="px-24 hover:bg-[#3b7cc6] text-white rounded-md p-2 bg-[#1d86ff]" >LOGIN</button>
        </div>
      </form>
      </div>
      <Footer />
    </div>
  );
}
