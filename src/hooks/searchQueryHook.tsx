import { Prisma, PrismaClient } from "@prisma/client"
import searchFunction from "./searchPage";



const prisma = new PrismaClient()

export default async function exampleQuery(data) {
  try {
    await prisma.$executeRaw`INSERT INTO "QueryResults" (appMetadata) VALUES (${JSON.stringify(data)})`;
    console.log("data inserted")
  } catch (error) {
    console.log("error--->", error)
  }
}