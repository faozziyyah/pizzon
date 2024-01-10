import React, { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({ products }) => {

 /*const [ data, setData ] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/products');
      const result = await response.json();
      const res = result.data
      //console.log(result)
      console.log(res)
      setData(res);
    }
    
    fetchData();

  }, []) */

  return (
    <div className={styles.pizzacontainer}>

      <p>Popular Dishes</p>
      <h1>Browse our Menu</h1>

      {<div className={styles.wrapper}>

        {products.map((pizza) => {
          return(
          <PizzaCard key={pizza._id} pizza={pizza} />
          )
        })}

      </div>}

    </div>
  )
}

export default PizzaList