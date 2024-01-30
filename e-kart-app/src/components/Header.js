import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartManager } from '../Context';
import "./header.css";

const Header = () => {
  const {cart} =useContext(CartManager)


  return (
    <div>
      <span className='header'> Welcome to your Header!!! </span>
      <ul className='nav'>
        <li> 
          <Link to="/">  Home Page </Link>
        </li>
        <li>
          <Link to="/cart">Cart Page {cart.length}  </Link>
        </li>

      </ul>
    </div>
  )
}

export default Header
