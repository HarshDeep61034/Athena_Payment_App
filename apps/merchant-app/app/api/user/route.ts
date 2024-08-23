import { NextResponse } from "next/server"
import db from "@repo/db/client";

export const POST = async () => {
    await db.user.create({
        data: {
            number: '+91 7017446342',
            password: "H@rsh7017",
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}