import { PrismaClient } from '@prisma/client'

// Project tutorial from https://www.prisma.io/docs/getting-started/quickstart#explore-the-data-in-prisma-studio

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  const usersWithPosts = await prisma.user.findMany({
    include: {
        posts: true,
    },
});
console.dir(usersWithPosts, { depth: null});

//   Function for creating a new user with new assigned posts - EXAMPLE
//   const user = await prisma.user.create({
//     data: {
//         name: 'Tikio',
//         email: 'test@hotmail.com',
//         posts: {
//             create: [
//                 {
//                     title: 'Hello World',
//                     published: true
//                 },
//                 {
//                     title: 'Hello World 2',
//                     content: 'This is still a draft'
//                 }
//             ],
//         },
//     },
//   })

//   Query for getting all users and logging it to console - EXAMPLE
//   const users = await prisma.user.findMany();
//   console.log(users);

//   Function for creating a user - EXAMPLE
//   const user = await prisma.user.create({
//     data: {
//         name: 'Shaun',
//         email: 'helloworld.com',
//     },
// })
// console.log(user);
}

main()

  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })