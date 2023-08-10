import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// ↓components↓
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Skills from '@/components/Skills';
import Skills2 from '@/components/Skills-v2';
import Works from '@/components/Works';
import Contact from '@/components/Contact';

import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>R.KIMURA&apos;s Portfolio</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
        <script
          src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
          async
        ></script>
      </Head>
      <div>
        <Hero />
        <About />
        <Skills2 />
        <Works />
        <Contact />
      </div>
    </>
  );
}
