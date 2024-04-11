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

  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
      }, {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
      },
  ]
  
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


  
export default function Page() {
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
              <Input id="amount" type="number" placeholder="Amount in $" />
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
        <Button>Add Money</Button>
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
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

</ScrollArea>
      </div>

    </div>
    </div>
    </div>    
     </main>
  );
}