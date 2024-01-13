import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const Cart = () => {
  return (

    <div className={styles.cartcontainer}>
    
      <div className={styles.cartleft}>

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>

              <td>
                <div className={styles.imgcontainer}>
                  <Image src='/images/pizza1.png' alt='' layout='fill' objectFit='cover' />
                </div>
              </td>

              <td>
                <span className={styles.name}>CORALZO</span>
              </td>

              <td>
                <span className={styles.prize}>$19.99</span>
              </td>

              <td>
                <span className={styles.quantity}>2</span>
              </td>

              <td>
                <span className={styles.total}>$39.80</span>
              </td>

            </tr>
          </tbody>

        </table>

      </div>
    
      <div className={styles.cartright}>
        <div className={styles.wrapper}>

          <h2 className={styles.title}>CART TOTAL</h2>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Subtotal:</b> $79.60
          </div>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Discount:</b> $0.00
          </div>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Total:</b> $79.60
          </div>

          <button>CHECKOUT NOW!</button>

        </div>
      </div>

    </div>
  )
}

export default Cart