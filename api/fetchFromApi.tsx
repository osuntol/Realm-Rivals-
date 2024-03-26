import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import query from "@/hooks/searchQueryHook";


// Fetching Data from an API and then saving it to database
export async function createJson(name: string) {
  const url = `https://api-basketball.p.rapidapi.com/leagues?country=${name}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6c8a79a311mshaeab319209e441dp1dbeaajsn2dcc54db8952',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
   query(result);
     console.log(result);
  } catch (error) {
    console.error(error);
  }


}
