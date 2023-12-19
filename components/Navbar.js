import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
//import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className={styles.navbar}>

        <Image src='/images/logo.png' alt='logo' width='50' height='50'/>

        <Image src='/images/header.png' alt='logo' width='200' height='100'/>

        <div className={styles.right}>

          <Link href="/" className={styles.navitem}>Home</Link>
          <p className={styles.navitem}>products</p>
          <p className={styles.navitem}>prices</p>
          <p className={styles.navitem}>blog</p>
          <p className={styles.navitem}>contact</p>

          <div className={styles.cart}>
            <Image src='/images/cart.png' alt='logo' width='50' height='30'/>
            <div className={styles.count}>2</div>
          </div>

        </div>
        
    </div>
  )
}

export default Navbar