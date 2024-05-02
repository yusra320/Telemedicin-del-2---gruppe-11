import { PrismaClient } from '@prisma/client';
export async function POST({ request, cookies }) {
    const body = await request.json();
    const prisma = new PrismaClient();
    const res = await prisma.dairy.create({
        data: {
            authorId: request.user.id, //Sat af server-hook'en
            title: body.title,
            content: body.content
        }
    });
    return new Response('Created', { status: 201 });
}
