import { NextResponse } from "next/server"
import db from "@repo/db/client"
import bcrypt from "bcrypt";

export const POST = async (req: any, res: any) => {
    const body = await req.json();
    console.log(body);
    const {email, password, name, phone}= body;

    const hashedPassword = await bcrypt.hash(password, 10);
   const result = await db.user.create({
        data: {
            name,
            number: phone,
            password: hashedPassword,
            email,
        }
    })
    console.log(result);
    return NextResponse.json({
        message: "user Created",
        result
    })
}