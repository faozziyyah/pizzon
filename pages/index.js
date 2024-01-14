import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import PizzaList from '@/components/PizzaList'
import { Content } from '@/components/Content'
import axios from 'axios'
import {BASE_API_URL} from '@/util/constants'
//import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  
  return (
    <>
      <Head>

        <title>Pizzon</title>
        <meta name="description" content="Best Pizza in Town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Hero />

      <PizzaList products={products} />

      <Content />
      
    </>
  )
}

export  const getServerSideProps = async () => {
  
    //const res = await fetch('http://localhost:3000/api/products');
    const res = await fetch(`${BASE_API_URL}/api/products`);
    const result = await res.json()
    const result1 = result.data

    //console.log(res)
    //console.log(result1)
    console.log(result)
    return {
      props: {
        products: result1
      },
    };

} 
