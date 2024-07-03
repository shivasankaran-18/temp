"use server"


import prisma from "./client";

async function action(email:string,passwd:string){
    
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
    const res1=await prisma.user.findMany({});
    let temp=JSON.stringify(res1);

    return temp;

}
export default action;

