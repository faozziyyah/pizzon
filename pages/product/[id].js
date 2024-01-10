import React, { useState, useEffect } from 'react'
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import axios from 'axios'

const Product = ({pizza}) => {

    const [size, setSize] = useState(0)

    const [quantity, setQuantity] = useState(1)

    /*const [ pizza, setPizza ] = useState([]);
   
     useEffect(() => {
   
       async function fetchData(id) {

        /*try {
          const response = await axios.get('http://localhost:3000/api/products');
          const result = response.data;
          const res = result.data;
          console.log(result);
          console.log(res);
          setPizza(res);
        } catch (error) {
          console.error('Error fetching data:', error);
        } 

         const response = await fetch(`http://localhost:3000/api/products/${id}`);
         const result = await response.json();
         //const res = result.data
         //const pizzaid = res._id
         //console.log(res)
         console.log(result)
         setPizza(result);
       }
       
       fetchData();
   
     }, []) */

  return (
    <div className={styles.ProductContainer}>

        <div className={styles.productleft}>

            <div className={styles.imgContainer}>
                {<Image src={pizza.img} objectFit='contain' layout='fill' alt='' />}
            </div>

        </div>

        <div className={styles.productright}>

            <h1 className={styles.title1}>{pizza.title}</h1>
            <span className={styles.price1}>${pizza.prices[size]}</span>
            <p className={styles.desc1}>{pizza.desc}</p>
            <h3 className={styles.choose}>choose your size</h3>

            <div className={styles.sizes}>

                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/images/pizza1.png" layout='fill' alt='size' />
                    <span className={styles.number}>small</span>
                </div>

                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/images/pizza1.png" layout='fill' alt='size' />
                    <span className={styles.number}>medium</span>
                </div>

                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/images/pizza1.png" layout='fill' alt='size' />
                    <span className={styles.number}>large</span>
                </div>

            </div>

            {/*<h3 className={styles.choose}>Choose additional ingredients</h3>

            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type='checkbox' id='sauce' name='sauce' className={styles.checkbox} />
                    <label htmlFor='sauce'>Sauce</label>
                </div>
            </div> */}

            <div className={styles.add}>
                <input onChange={(e) => setQuantity(e.target.value)} type='number' defaultValue={1} className={styles.qtty} />
                <button className={styles.button}>Add to Cart</button>
            </div>

        </div>

    </div>
  )
}

export  const getServerSideProps = async ({params}) => {
    const pizzaId = params.id; 
  
    const responseId = await axios.get(`http://localhost:3000/api/products/${pizzaId}`);
    //const result = await responseId.json()
    const result = responseId.data;
    //const res = result.data;
    //const pizza = result.data;

    console.log(result)
    return {
      props: {
        pizza: result,
      },
    };

} 

export default Product