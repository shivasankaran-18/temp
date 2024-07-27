"use server"


import { NextResponse } from "next/server";
import prisma from "./client";

export async function signup(email:string,passwd:string){
    
   
        const res=await prisma.user.create({
            data:{
                email:email,
                password:passwd,
            },
            select:{
                email:true,
                password:true,
            }
    
        });
      
        let temp=JSON.stringify(res);
    
        return temp;

   

}

export async function signin(email:string,passwd:string){
    
    const res=await prisma.user.findUnique({
        where:{
            email:email,
            password:passwd
        }

    });
    
    if(!res)
    {
        return JSON.stringify(res)
        
    }

    let temp=JSON.stringify(res);

    return temp;

}


