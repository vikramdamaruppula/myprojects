import { useContext } from "react"
import { CartManager } from "../Context"

const SingleProduct = ({product}) => {
    const{name,price,image} =product

    const {cart,setCart} =useContext(CartManager)

    const handleAdd=()=>{
        setCart([...cart,product])
    }

    const handleDel=()=>{
        setCart(cart.filter((item)=>item.id !==product.id))
    }

  return (
    <div className='products'>
      <img src={image} alt={name} />
      <div className='productDesc'>
        <span style={{fontweight:700}} > {name} </span>
        <span> rs {price.slice(0,3)} </span>
      </div>

      {cart.includes(product) ? 
      ( <button className='add' onClick={handleDel}> Delete  Cart </button>) :
      ( <button className='add' onClick={handleAdd}> Add to Cart </button>)  }


    </div>
  )
}

export default SingleProduct
