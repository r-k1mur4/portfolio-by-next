import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// ↓components↓
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from '@/components/Skills';
import Skills2 from '@/components/Skills-v2';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>R.KIMURA&apos;s Portfolio</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Skills2 />
      </div>
    </>
  );
}