import db from "@repo/db/client";
import { UUID, randomUUID } from "crypto";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const POST = async (req: any, res: any) => {
    const body = await req.json();
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user || !session.user.id) {
            throw new Error("User session not found or missing user ID");
        }
        
        const token = randomUUID();
        const userId = parseInt(session.user.id);
        const dt = new Date();

        const createdTransaction = await db.onRampTransaction.create({
            data: {
                status: "Processing",
                provider: "http://localhost:3002/",
                amount: parseInt(body.amount),
                startTime: dt.toISOString(),
                token,
                userId,
            }
        });

        return NextResponse.json({
            msg: "Transaction Initialized",
            token,
            transaction: createdTransaction
        });
    } catch(err) {
        return NextResponse.json({
            msg: "Transaction failed",
            err: err// Return only error message
        });
    }
}


export const GET = async(req: any, res: any) =>{
    const session = await getServerSession(authOptions);
    try{
        const res =  await db.onRampTransaction.findMany({where: {
            userId: parseInt(session.user.id),
        }})
        return NextResponse.json(res);
    }
    catch(e){
        return NextResponse.json(e);
    }
}