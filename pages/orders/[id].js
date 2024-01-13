import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {

  return (
    <div className={styles.container}>

      <div className={styles.left}>

        <div className={styles.row}>

          <table>

            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>

                <td>
                  <span className={styles.id}>{order._id}</span>
                </td>

                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>

                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>

                <td>
                  <span className={styles.total}>${order.total}</span>
                </td>

              </tr>
            </tbody>

          </table>

        </div>

      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>

          <h2 className={styles.title}>CART TOTAL</h2>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Subtotal:</b> ${order.total}
          </div>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Discount:</b> $0.00
          </div>

          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Total:</b> ${order.total}
          </div>

          <button disabled> PAID </button>

        </div>
      </div>
      
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
}; 

export default Order;