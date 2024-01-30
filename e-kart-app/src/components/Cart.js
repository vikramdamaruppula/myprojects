import { useContext,useEffect,useState} from "react"
import { CartManager } from "../Context"

import SingleProduct  from "./SingleProduct"

const Cart = () => {

const {cart} =useContext(CartManager)  // use curly braces for destructuring the state objects donot use [] again 

const [total,setTotal] =useState()
console.log(cart)
useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price),0));
},[cart])

  return (
    <div>
      <span style={{fontSize:30}} > My Cart</span>  <br /> 
      <span style={{fontSize:30}} >Total: ({total}) </span>

      <div className="productContainer">
        {cart.map((prod)=>(
          <SingleProduct key={prod.id} product={prod} />
        ))}
      </div>
      
    </div>
  )
}

export default Cart
