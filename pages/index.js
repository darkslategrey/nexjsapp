import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [number, setNumber] = useState(0);
  // const side = process.browser ? "client" : "server";

  return (
    <>
      <Head>
        <title>Increment decrement app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>You're currently on the {side}-side.</div> */}
      {number}
      <Button onClick={() => setNumber(number + 1)} colorScheme="blue">
        Increment
      </Button>
      <Button onClick={() => setNumber(number - 1)} colorScheme="blue">
        Decrement
      </Button>
    </>
  );
}

// import * as React from "react";

// 1. import `ChakraProvider` component

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return <TheRestOfYourApplication />;
// }
