import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = ({ image }) => {
  return (
    <Link href='/product/id' className={styles.PizzaCard}>

        <Image src={image} alt='sandwich' height='250' width='300' />

        <div className={styles.pizzadetail}>
          
          <h1 className={styles.title}>sandwich</h1>
          <span className={styles.price}>$19.90</span>

        </div>

        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <button>
          <Image src='/images/cart1.png' alt='logo' width='50' height='50'/>
          <p>order now</p>
        </button>

    </Link>
  )
}

export default PizzaCard