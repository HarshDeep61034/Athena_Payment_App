import Image from "next/image"
import bank from "../assets/hdfc.png"
export default function Appbar(){
    return (<>
         <div>
        <Image className="mx-auto my-5" width={180} src={bank} alt="hdfc-bank-logo" />
        <p className="text-lg text-center my-5">
      Welcome to HDFC Bank NetBanking 
       </p>
       <div className="w-full h-12 my-3 bg-slate-100"></div>
       </div>
        </>)
}