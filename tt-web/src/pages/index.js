import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/index.module.css';
// import Solutions from '@/components/Solutions/Solutions';
import Hero from '@/components/hero/Hero';
import HomeDescription from '@/components/homeDescription/HomeDescription';
import SliderCard from "@/components/slider/SliderCard";


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Track Travel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section id="solutions" className={styles.container}>
          <Hero />
          <HomeDescription />
          <SliderCard />
        </section>
      </div>
    </>
  )
}
