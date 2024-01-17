import React from 'react'
import PizzaList from '@/components/PizzaList'
import {BASE_API_URL} from '@/util/constants'

const index = ({ products }) => {

  return (
    <div>

        <PizzaList products={products} />

    </div>
  )
}

export  const getServerSideProps = async () => {
  
    //const res = await fetch('http://localhost:3000/api/products');
    const res = await fetch(`${BASE_API_URL}/api/products`);
    const result = await res.json()
    const result1 = result.data

    //console.log(res)
    //console.log(result1)
    console.log(result)
    return {
      props: {
        products: result1
      },
    };

} 

export default index