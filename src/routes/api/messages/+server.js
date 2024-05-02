import { PrismaClient } from "@prisma/client";
import { json } from "@sveltejs/kit";

export async function GET({url}){
    const prisma= new PrismaClient();
    const id = url.searchParams.get("user");
    console.log(id) 
    const messages = await prisma.dairy.findMany({
        where: {
            authorId: id
        }
    })
    console.log(messages)
    return json(messages);

}