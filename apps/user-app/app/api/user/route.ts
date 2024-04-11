import { NextResponse } from "next/server"
import db from "@repo/db/client"

// const client = new PrismaClient();
// email       String?  @unique
// name        String? 
// number      String  @unique
// password    String
export const POST = async (req: any, res: any) => {
    const body = await req.json();
    console.log(body);
    const {email, password, name, phone}= body;
//    const result = await db.user.create({
//         data: {
//             name,
//             number: phone,
//             password,
//             email,
//         }
//     })
    return NextResponse.json({
        message: "user Created",
        // result
    })
}