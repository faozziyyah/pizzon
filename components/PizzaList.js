import React from 'react'
import styles from '../styles/Hero.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.pizzacontainer}>

        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>

    </div>
  )
}

export default PizzaList