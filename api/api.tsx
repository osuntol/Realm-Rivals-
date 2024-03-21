

// const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': process.env.API_KEY,
// 		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

import { Prisma, PrismaClient } from "@prisma/client"


const API_KEY = process.env.API_KEY

export default async function ServerComponent() {

  const prisma = new PrismaClient();

  const response = await fetch(
    `https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {include: {
          last_name: "Curry"
        } }
      }),
    },
  )

  const responseData = await response.json()
  const data = responseData.data

  return (
    <div>
      <h1>Server Component</h1>
      {data ? (
        <ul>
          {data.factories.map((factory) => (
            <li key={factory.id}>
              <p>ID: {factory.id}</p>
              <p>Pool Count: {factory.poolCount}</p>
              <p>Transaction Count: {factory.txCount}</p>
              <p>Total Volume USD: {factory.totalVolumeUSD}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}