"use server"

import dynamic from "next/dynamic";
import header from "./components/header";

const ServerComponent = dynamic(() => import ('./components/header'))
export default async function Home() {
  return (
    <ServerComponent/>
  );
}
