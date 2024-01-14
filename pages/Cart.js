import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {BASE_API_URL} from '@/util/constants'

const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post(`${BASE_API_URL}/api/orders`, data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

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

          {cart.products.map((product) => (

            <tr key={product._id}>

              <td>
                <div className={styles.imgcontainer}>
                  <Image src={product.img} alt='' layout='fill' objectFit='cover' />
                </div>
              </td>

              <td>
                <span className={styles.name}>{product.title}</span>
              </td>

              <td>
                <span className={styles.prize}>{product.price}</span>
              </td>

              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>

              <td>
                <span className={styles.total}>${product.price * product.quantity}</span>
              </td>

            </tr>

          ))}
            
          </tbody>

        </table>

      </div>
    
      <div className={styles.cartright}>
        <div className={styles.wrapper}>

          <h2 className={styles.title}>CART TOTAL</h2>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Subtotal:</b> ${cart.total}
          </div>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Discount:</b> $0.00
          </div>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Total:</b> ${cart.total}
          </div>

          <button>CHECKOUT NOW!</button>

        </div>
      </div>

    </div>
  )
}

export default Cart