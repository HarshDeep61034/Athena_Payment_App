"use client"
import { Button } from "@repo/ui/components/ui/button";
import { useBalance } from "@repo/store/useBalance";
import { useSession, signIn, signOut } from "next-auth/react";
import { Label } from "@repo/ui/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog"
import { Input } from "@repo/ui/components/ui/input"
import {
  Send,
} from "lucide-react"
export default function Page() {
  const session = useSession();
  const balance = useBalance();
  return (
    <main className="bg-zinc-100 w-full">
      <div>
        <h1 className="text-4xl font-bold p-3">Hello There, {session.data?.user?.name}</h1>
        <Label className="text-xl text-slate-600 mx-3">Portfolio Value</Label>
      <h1 className="text-3xl mx-3 font-bold" >${balance}</h1>
      <div className="w-full h-[80vh] flex justify-center items-center">

     <div className=""> <Dialog>
      <DialogTrigger asChild>
        <Button variant="zinc"><Send className="mr-2" />Send Money</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
          <DialogDescription>
            Enter the amount of money to send & mobile no of person to send.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              placeholder="Amount"
              type="number"
              name="amount"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="number" className="text-right">
              Number
            </Label>
            <Input
              id="phone"
              type="number"
              name="phone"
              placeholder="Mobile No"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send Money</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog></div>
      </div>
     
    </div>    
     </main>
  );
}


