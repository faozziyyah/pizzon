import React from 'react'
import styles from '../styles/Content.module.css'
import Image from 'next/image'

const TestimonialCard = ({ image }) => {
  return (
    <div className={styles.TestimonialCard}>

        <Image src={image} alt='sandwich' height='70' width='70' style={{borderRadius: '50%'}} />
        <h3>Tarka Bowa</h3>
        <p>Lorem Ipsum is simply dummy text of the printing book. it has survived not only five centuries, but also the leap.</p>

    </div>
  )
}

export {TestimonialCard}