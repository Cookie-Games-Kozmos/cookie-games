import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Game</title>
        <link rel="icon" href="/assets/Cookie.png" />
      </Head>
      <Navbar />
    </div>
  );
}
