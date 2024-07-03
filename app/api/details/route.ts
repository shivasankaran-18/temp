import { NextResponse } from "next/server";
import prisma from "../../client"

export const GET=async()=>{
    const res=await prisma.user.findMany({},);

    return NextResponse.json(res);
}