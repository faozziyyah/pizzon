import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.PizzaCard}>

        <Image src="/images/sandwich.jpg" alt='sandwich' height='250' width='300' />
        <h1 className={styles.title}>sandwich</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>
  )
}

export default PizzaCard