import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import searchFunction from "@/app/searchResults/page";

// Fetching Data from an API and then saving it to database
export async function createJson(name: string) {
  const url = `https://free-nba.p.rapidapi.com/players/${name}`;
  const options = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Key': "6c8a79a311mshaeab319209e441dp1dbeaajsn2dcc54db8952",
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("data 1-----", data);


    // await prisma.queryResults.create({
    //   data: {
    //     appMetadata: data
    //   },
    // });

  } catch (error) {
    console.error('Error saving JSON data:', error)
  }


}
