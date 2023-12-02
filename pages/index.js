import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import PizzaList from '@/components/PizzaList'
//import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzon</title>
        <meta name="description" content="Best Pizza in Town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <PizzaList />
      
    </>
  )
}
