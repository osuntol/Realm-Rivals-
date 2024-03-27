'use client'
import { useState } from "react"
import {  PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { createJson } from "../api/fetchFromApi";

const prisma = new PrismaClient
export default function SearchBar() {
  //set state for name that will be changing
  const [name, setName] = useState<string>("")
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