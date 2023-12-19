import React from 'react'
import styles from '../styles/Content.module.css'
import Image from 'next/image'

const StrenghtCard = ({ image }) => {
  return (
    <div className={styles.StrenghtCard}>

        <Image src={image} alt='sandwich' height='30' width='30' />
        <h3>All Kinds of Foods</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>

    </div>
  )
}

export {StrenghtCard}