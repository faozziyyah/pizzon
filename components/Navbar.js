import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
//import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className={styles.navbar}>

        <Image src='/images/logo.png' alt='logo' width='50' height='50'/>

        <div className={styles.right}>

          <p className={styles.navitem}>Home</p>
          <p className={styles.navitem}>products</p>
          <p className={styles.navitem}>prices</p>
          <p className={styles.navitem}>blog</p>
          <p className={styles.navitem}>contact</p>

          {/*<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <div>
              <FaFolder />
            </div>
          </IconContext.Provider>; */}

        </div>
        
    </div>
  )
}

export default Navbar