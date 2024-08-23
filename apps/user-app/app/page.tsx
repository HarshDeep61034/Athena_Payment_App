"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@repo/ui/components/ui/button";

// import {useBalance} from "@repo/store/balance";
export default function Page(): JSX.Element {
  const session = useSession();
  const router = useRouter();
  // useEffect(()=>{
  //   if(session.data == null){
  //     router.push("/api/auth/signin")
  //   }
  // }, [])
  // const balance = useBalance;
  return (
   <>
   <p>hi there, {session.data?.user?.email}</p>
   <Button variant="secondary">Secondary</Button>
   <h1 className="text-3xl font-bold text-center">User App</h1>
   <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

   </>
  );
}
