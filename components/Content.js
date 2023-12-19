import React from 'react'
import styles from '../styles/Content.module.css'
import Image from 'next/image'
import { StrenghtCard } from './StrenghtCard';
import { TestimonialCard } from './TestimonialCard';

const Content = () => {

  const imageUrl = '/images/food.png';
  const imageUrl2 = '/images/fan.png';
  const imageUrl3 = '/images/face.png';
  const imageUrl4 = '/images/location.png';
  
  const profileUrl = '/images/client-2.png';
  const profileUrl1 = '/images/client-4.png';
  const profileUrl2 = '/images/client-3.png';

  return (
    <div className={styles.content}>

      <div className={styles.strenght}>

        <div className={styles.top}>

          <div>
            <p>Our Strenght</p>
            <h1>Why We Are The Best</h1>
          </div>

          <Image src='/images/pizza-pice.png' alt='pizza'  height='250' width='300' />
          
        </div>

        <div className={styles.bottom}>

          <StrenghtCard image={imageUrl} />
          <StrenghtCard image={imageUrl2} />
          <StrenghtCard image={imageUrl3} />
          <StrenghtCard image={imageUrl4} />

        </div>

      </div>

      <div className={styles.feedback}>

        <div className={styles.top1}>

            <p>Cutomer Feedback</p>
            <h1>Client Testimonials</h1>
          
        </div>

        <div className={styles.bottom} style={{marginTop: '2em'}}>

          <TestimonialCard image={profileUrl} />
          <TestimonialCard image={profileUrl1} />
          <TestimonialCard image={profileUrl2} />
          <TestimonialCard image={profileUrl1} />

        </div>

      </div>

    </div>
  )
}

export {Content}