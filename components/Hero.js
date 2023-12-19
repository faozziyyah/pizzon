import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.container}>

      <div className={styles.top}>

        <article className={styles.article}>

          <h1>Handmade, With an Extra Pinch of <span className={styles.red}>Love</span> </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          <button>
            <Image src='/images/cart1.png' alt='logo' width='50' height='50'/>
            <p>order now</p>
          </button>

        </article>

        <div className={styles.hero}>
          <Image src='/images/pizza1.png' alt='logo' width='400' height='400' style={{position: 'relative', top: '2em', right:'15em'}}/>
        </div>

      </div>

      <div className={styles.bottom}>

        <Image src='/images/pizza3.png' alt='logo' width='400' height='400'/>

        <article className={styles.article1}>

          <h1>Daily fresh and always tasty </h1>
          <p>There are many variations of passages of Lorem Ipsum available but the majority haved</p>

        </article>

      </div>

    </div>
  )
}

export default Hero