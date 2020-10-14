const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;

// A `main` function so that you can use async/await
async function main() {
    // ... you will write your Prisma Client queries here
    const post = await prisma.post.create({
        data: {
            title: "Prisma makes databases easy",
            content: "About prisma client",
            User: {
                connect: { email: "mdemon7475@gmail.com" },
            },
        },
    })

    console.log(post)
    const users = await prisma.user.findMany({
        include: { Post: true },
    })
    console.dir(users, { depth: null })
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })