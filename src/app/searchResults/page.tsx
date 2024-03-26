'use client'
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import { useState } from "react"
import { createJson } from "../../../api/fetchFromApi"



export default function SearchBar() {
  //set state for name that will be changing
  const [name, setName] = useState("")
  const [query, setQuery] = useState(`
    query 
  
  
  `)
  // handling the input from the field on the browser then sets name


  //handle click function when button is clicked
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    

    try {
      await createJson(name);
    } catch (error) {
      console.log("ERROR+_____>", error)
    }
    
    return;
  }



  return (
    <div>

      <form onSubmit={handleSubmit}>
        <textarea
          style={{ color: "black" }}
          name="NAME"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          placeholder='search a name'
        />
        <button type='submit'> CLICK ME </button>
      </form>
    </div>
  )
};