import { PrismaClient } from '@prisma/client'
import { useState, useEffect } from 'react'
import { Header } from '@/hooks/header'


const prisma = new PrismaClient()


export default function players() {
  const [playerName, setPlayerName] = useState([])

  useEffect(() => {
    async function getPlayers() {
      try {
        const allPlayers = await prisma.queryResults1.findMany()
        setPlayerName(allPlayers)
      }
      catch (error) {
        console.log("ERRORR___>", error)
      }
    }

    getPlayers()

    return () => {
      prisma.$disconnect()
    }
  }, [])


  return (
    <div>

      <Header />
      <div>
        <h1>Players List</h1>
        <ul>
          {playerName.length === 0 ? (<p>NO PLAYER NAMES</p>) : (

            playerName.map(player => (
              <li key={player.id}>{player}</li>
            ))

          )
          }
  </ul>
      </div>
    </div>

  )


}
