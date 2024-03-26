
"use client"
import {  PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()




export default async function query(json: JSON) {
try {
  await prisma.queryResults.update({
    where: { id: 1 },
    data: { appMetadata: json },
  })
} catch (error) {
    console.log("ERROR FOR prisma query--->", error)
}
  // await prisma.$queryRaw`INSERT INTO QueryResults (appMetadata)
  // VALUES (${data})`
}


// export default async function exampleQuery(data: JSON ) {
// try {
//   await prisma.$queryRaw`UPDATE QueryResults1 SET appMetadata = ${data} WHERE id = 1 ;`
// }  catch (error){
//   console.log("ERROR----->", error)
// }
// }