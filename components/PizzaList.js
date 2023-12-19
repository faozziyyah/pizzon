import React from 'react'
import styles from '../styles/Hero.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {

  const imageUrl = '/images/sandwich.jpg';
  const imageUrl1 = '/images/pizza1.png';

  return (
    <div className={styles.pizzacontainer}>

      <p>Popular Dishes</p>
      <h1>Browse our Menu</h1>

        <div className={styles.wrapper}>
            <PizzaCard image={imageUrl} />
            <PizzaCard image={imageUrl} />
            <PizzaCard image={imageUrl1} />
        </div>

    </div>
  )
}

export default PizzaList