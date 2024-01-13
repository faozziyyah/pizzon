import React from 'react'
import styles from '../styles/Content.module.css'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Content = () => {

  const images = [
    '/images/food.png',
    '/images/fan.png',
    '/images/face.png',
    '/images/location.png',
  ];

  const profiles = [
    '/images/client-2.png',
    '/images/client-4.png',
    '/images/client-3.png',
  ];

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
        
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            showThumbs={false} 
            className={styles.mySwiper}
          >
            {images.map((img, i) => (

              <div key={i} className={styles.swipItem}>

                <div className={styles.imgBox}>
                  <Image src={img} alt="slides" height='50' width='50' />
                </div>

                <div className={styles.detail}>
                  <h3>All Kinds of Foods</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>

              </div>

            ))}

          </Carousel>

      </div>

      <div className={styles.feedback}>

        <div className={styles.top1}>

            <p>Cutomer Feedback</p>
            <h1>Client Testimonials</h1>
          
        </div>

        <div className={styles.bottom} style={{marginTop: '2em'}}>
        
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            showThumbs={false} 
            className={styles.mySwiper}
          >
            {profiles.map((profile, i) => (

              <div key={i} className={styles.swipItem}>

                <div className={styles.imgBox}>
                  <Image src={profile} alt="slides" height='70' width='70' style={{borderRadius: '50%'}} />
                </div>

                <div className={styles.detail}>
                  <h3>Tarka Bowa</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>

              </div>

            ))}

          </Carousel>

        </div>

      </div>

    </div>
  )
}

export {Content}