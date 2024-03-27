import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
const prisma = new PrismaClient();



// Fetching Data from an API and then saving it to database
export async function createJson(name: string) {
  const url = `https://api-basketball.p.rapidapi.com/leagues?country=${name}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6c8a79a311mshaeab319209e441dp1dbeaajsn2dcc54db8952',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    },

  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log("RESULT---->", result)
    await prisma.queryResults.update({
      where: { id: 1 },
      data: { appMetadata: result }
    })

  } catch (error) {
    console.error(error);
  }
}

  export async function getStaticProps() {
    const prisma = new PrismaClient()
    // const posts = await prisma.post.findMany()
  const response = await fetch(url, options);
    const result = await response.json();
    await prisma.queryResults.update({
      where: { id: 1 },
      data: { appMetadata: result }
    })
}
