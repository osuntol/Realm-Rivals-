import { PrismaClient } from "@prisma/client"
import { GetStaticProps } from "next"

// const prisma = new PrismaClient()
// export default async function query(results: JSON) {
//   try {

//   } catch (error) {
    
//     console.log("ERROR UPDATING DB", error)
//   }
// }


export async function getStaticProps(results:JSON) {
  const prisma = new PrismaClient()
  // const posts = await prisma.post.findMany()

  await prisma.queryResults.update({
    where: { id: 1 },
    data: { appMetadata: results }
  })
  // return {
  //   props : { posts }
  // }
}