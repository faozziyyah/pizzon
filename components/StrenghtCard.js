import React from 'react'
import styles from '../styles/Content.module.css'
import Image from 'next/image'

const StrenghtCard = () => {

  const images = [
    '/images/food.png',
    '/images/fan.png',
    '/images/face.png',
    '/images/location.png',
  ];
  
  return (
    <div className={styles.StrenghtCard}>

      <div className={styles.arrowContainer} style={{left: 0}}>
        <Image src="/images/arrow-left-3.png" alt='' layout='fill' />
      </div>

      <div className={styles.cardWrapper}>

        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
          
            <Image src={img} alt='sandwich' height='30' width='50' />

            <div className={styles.imgDetail}>   
              <h3>All Kinds of Foods</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
            </div>

          </div>
        ))}

      </div>

      <div className={styles.arrowContainer} style={{right: 0}}>
        <Image src="/images/arrow-right-1.png" alt='' layout='fill' />
      </div>

    </div>
  )
}

export {StrenghtCard}