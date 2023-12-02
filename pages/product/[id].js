import React, { useState } from 'react'
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'

const Product = () => {

    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: "/images/sandwich.jpg",
        name: "Sandwich",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }

  return (
    <div className={styles.ProductContainer}>

        <div className={styles.productleft}>

            <div className={styles.imgContainer}>
                <Image src={pizza.img} objectFit='contain' layout='fill' alt='' />
            </div>

        </div>

        <div className={styles.productright}>

            <h1 className={styles.title1}>{pizza.name}</h1>
            <span className={styles.price1}>${pizza.price[size]}</span>
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

            <h3 className={styles.choose}>Choose additional ingredients</h3>

            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type='checkbox' id='sauce' name='sauce' className={styles.checkbox} />
                    <label htmlFor='sauce'>Sauce</label>
                </div>
            </div>

            <div className={styles.add}>
                <input type='number' defaultValue={1} className={styles.qtty} />
                <button className={styles.button}>Add to Cart</button>
            </div>

        </div>

    </div>
  )
}

export default Product