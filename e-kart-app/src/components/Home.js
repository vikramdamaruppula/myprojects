import { faker } from '@faker-js/faker';
import { useContext, useState } from 'react';

import SingleProduct from "./SingleProduct"
import "./header.css"
import { CartManager } from '../Context';

faker.seed(100)

const Home = () => {

  const productsArray =[...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.image()
  }))

  const [products] = useState(productsArray)


  console.log(useContext(CartManager))

  return (
    <div className='productContainer'>
      {products.map((eachProd)=>(
        <SingleProduct key={eachProd.id} product={eachProd}  />
      ))}
    </div>
  )
}

export default Home
