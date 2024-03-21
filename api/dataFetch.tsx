import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Fetching Data from an API and then saving it to database
export async function createJson() {
  const url = 'https://free-nba.p.rapidapi.com/teams/bucks';
  const options = {
    method: 'POST',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const JSON = await prisma.queryResults.create({
      data: {
        appMetadata: data
      },
    });
    return JSON;

  } catch (error) {
    console.error('Error saving JSON data:', error)
  }
}
