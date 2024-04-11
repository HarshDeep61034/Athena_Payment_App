"use client"
import { Button } from "@repo/ui/components/ui/button";
import { useBalance } from "@repo/store/useBalance";
import { useSession} from "next-auth/react";
export default function Page() {
  const session = useSession();
  const balance = useBalance();
  return (
    <main>
      <div>
    <h1>User: {session.data?.user?.email}</h1>
      <h1>Balance: {balance}</h1>
      <Button>Click me</Button>
    
    </div>    
     </main>
  );
}
