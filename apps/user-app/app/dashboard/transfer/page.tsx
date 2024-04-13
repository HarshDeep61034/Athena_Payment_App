"use client"
import * as React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@repo/ui/components/ui/table"
  import { ScrollArea } from "@repo/ui/components/ui/scroll-area"
  
import { Button } from "@repo/ui/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
  
export default function Page() {
  const [trxn, setTrxn] = React.useState([]);
  const [amount, setAmount] = React.useState(0);
  const router = useRouter();
  async function handleAddMoney(){
    const res = await axios.post("/api/transaction", {amount});
    if(res.data.token != undefined){
      router.push(`http://localhost:3002?token=${res.data.token}`);
    }
  }

  React.useEffect(() => {
    async function getOnRampTransactions() {
        try {
            const res = await axios.get("/api/transaction");
            const trans = res.data.reverse();
          setTrxn(trans); // Using functional form of setTrxn
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    }
    getOnRampTransactions();
}, []);
  return (
    <main className="bg-zinc-100 w-full">
      <div>
    <h1 className="text-4xl p-5 font-bold">Transfer</h1>
    <div className="flex w-full justify-around">
        <div>
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Add Money</CardTitle>
        <CardDescription>Enter Amount & Bank to add money in your Athena Wallet.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" onChange={(e)=>setAmount(e.target.value)} type="number" placeholder="Amount in $" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Bank">Bank</Label>
              <Select>
                <SelectTrigger id="bank">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">HDFC</SelectItem>
                  <SelectItem value="sveltekit">SBI</SelectItem>
                  <SelectItem value="astro">PNB</SelectItem>
                  <SelectItem value="nuxt">IDFC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex w-full justify-center">
        <Button onClick={handleAddMoney}>Add Money</Button>
      </CardFooter>
    </Card>
    </div>
    <div className="w-[500px]">
        <div className="bg-white p-4 rounded-lg">
        <h1 className="text-xl">BALANCE</h1>
        <hr />
        <div className="flex my-3 justify-between">
            <div>Unlocked Balance</div>
            <div>0 INR</div>
        </div>
        <hr />
        <div className="flex my-3 justify-between">
            <div>Total Locked Balance</div>
            <div>0 INR</div>
        </div>
        <hr />
        <div className="flex my-3 justify-between">
            <div>Total Balance</div>
            <div>0 INR</div>
        </div>
        <hr />
        </div>

        <div> 
            
        <ScrollArea className="h-[400px] my-4 bg-white p-4 rounded-lg border">
       <Table>
        <TableCaption>A list of your recent Transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Transaction Id</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trxn.length > 0 ? trxn.reverse().map((tr, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{tr.startTime.slice(0,10)}</TableCell>
              <TableCell>{tr.status}</TableCell>
              <TableCell>{tr.token.slice(0, 14) + "..."}</TableCell>
              <TableCell className="text-right">{tr.amount}</TableCell>
            </TableRow>
          )) : "No Transactions Yet!!"}
        </TableBody>
      </Table>

</ScrollArea>
      </div>

    </div>
    </div>
    </div>    
     </main>
  );
}