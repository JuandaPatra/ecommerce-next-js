import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function POST(req:Request) {
    try {
        const { userId } = await auth();
        const body = await req.json();

        const { name} = body;

        if(!userId) {
            return new NextResponse('Unauthorized', {status: 401});
        }

        if(!name){
            return new NextResponse('Silahkan input nama Toko',{status:400});
        }

        const checkResult = await db.store.findMany({
            where: {
                name
            }
        });

        if(checkResult.length > 0){
            return new NextResponse('Toko sudah ada',{status:400});
        }


        const store = await db.store.create({
            data: {
                name,
                userId 
            }
        });

        return  NextResponse.json(store);
    } catch (error) {
        return new NextResponse(`Internal Error ${error}`, {status: 500});
        
    }
    
}