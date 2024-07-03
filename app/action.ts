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
  
    let temp=JSON.stringify(res);

    return temp;

}
export default action;

