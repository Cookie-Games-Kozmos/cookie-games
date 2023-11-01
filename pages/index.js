import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import People from "@/components/People";
import { Analytics } from "@vercel/analytics/react";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Game</title>
        <link rel="icon" href="/assets/Cookie.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <People />
      <Contact />
      <Analytics />
    </div>
  );
}
