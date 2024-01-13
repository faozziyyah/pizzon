import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
//import { IconContext } from "react-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "prices",
    },
    {
      id: 4,
      link: "blog",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (

    <div className={styles.navbar}>

      <Link href="/">
        <Image src='/images/logo.png' alt='logo' width='50' height='50'/>
      </Link>

      <Image src='/images/header.png' alt='logo' width='200' height='100'/>

      <div className={styles.navitem}>

        {links.map(({ id, link }) => (
          <div
            key={id}
          >
            <Link href={link}>{link}</Link>
          </div>
        ))}

        <Link href="/Cart" className={styles.cart} passHref>
          <Image src='/images/cart.png' alt='logo' width='50' height='30'/>
          <div className={styles.count}>2</div>
        </Link>

      </div>

      <div onClick={() => setNav(!nav)} className={styles.toggler}>

        {nav ? <Image src='/images/Frame.png' alt='logo' width='50' height='50'/> : 
          <Image src='/images/hamdark.png' alt='logo' width='30' height='30'/>
        }

      </div>

      {nav && (

        <div className={styles.mobilenav}>

          {links.map(({ id, link }) => (
            <div
              key={id}
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </div>
          ))}

          <Link style={{marginTop: '2em'}} href="/Cart" className={styles.cart} passHref>
            <Image src='/images/cart.png' alt='logo' width='50' height='30'/>
            <div className={styles.count}>2</div>
          </Link>

        </div>

      )}
        
    </div>
  )
}

export default Navbar