import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = ({ pizza }) => {
  return (
    <Link href={`/product/${pizza._id}`} className={styles.PizzaCard}>

        <Image src={pizza.img} className={styles.PizzaImage} alt='sandwich' height='250' width='250' />

        <div className={styles.pizzadetail}>
          
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>${pizza.prices[0]}</span>

        </div>

        <p className={styles.desc}>{pizza.desc}.</p>

        <button>
          <Image src='/images/cart1.png' alt='logo' width='50' height='50'/>
          <p>order now</p>
        </button>

    </Link>
  )
}

export default PizzaCard