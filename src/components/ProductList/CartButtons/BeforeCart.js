import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart'


import "./CartButtons.css"

const BeforeCart = ({product}) => {

 const dispatch=useDispatch()

  return (
    <div className="before-cart">
        <button onClick={()=>dispatch(addToCart(product))} className='add-cart-button'>Add to Cart</button> 
    </div>
  )
}

export default BeforeCart 