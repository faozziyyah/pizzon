import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.column}>
        
        <div className={styles.section}>

          <h3>information</h3>

          <div className={styles.footnav}>

            <p className={styles.footitem}>Home</p>
            <p className={styles.footitem}>products</p>
            <p className={styles.footitem}>prices</p>
            <p className={styles.footitem}>blog</p>
            <p className={styles.footitem}>contact</p>

          </div>

        </div>

        <div className={styles.section}>

          <h3>top items</h3>

          <div className={styles.footnav}>

            <p className={styles.footitem}>pepperoni</p>
            <p className={styles.footitem}>swiss mushroom</p>
            <p className={styles.footitem}>barbeque chicken</p>
            <p className={styles.footitem}>vegetarian</p>
            <p className={styles.footitem}>ham & cheese</p>

          </div>

        </div>

      </div>

      <div className={styles.column}>

        <div className={styles.section}>
    
          <h3>others</h3>
    
          <div className={styles.footnav}>
    
            <p className={styles.footitem}>checkout</p>
            <p className={styles.footitem}>cart</p>
            <p className={styles.footitem}>products</p>
            <p className={styles.footitem}>locations</p>
            <p className={styles.footitem}>legal</p>
    
          </div>
          
        </div>
    
        <div className={styles.section}>
    
          <h3>social media</h3>
    
          <div className={styles.footnav}>
    
            <p className={styles.footitem1}>Signup and get exclusive offers and coupon codes</p>
            <button>sign up</button>
    
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Footer