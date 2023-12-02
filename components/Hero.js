import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.container}>

        <article className={styles.article}>
            <h1>Handmade, With an Extra Pinch of <span className={styles.red}>Love</span> </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </article>

        <Image src='/images/pizza1.png' alt='logo' width='150' height='150'/>

    </div>
  )
}

export default Hero