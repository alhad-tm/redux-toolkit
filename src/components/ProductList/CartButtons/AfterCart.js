import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/cart'
import "./CartButtons.css"

const AfterCart = ({cartCount,productID}) => {
  
  const dispatch=useDispatch()
  return (
    <div className="after-cart">
    <button onClick={()=>dispatch(decrement(productID))}  className='cart-counter-button'>-</button>
    <div className='cart-count'>{cartCount}</div>
    <button onClick={()=>dispatch(increment(productID))} className='cart-counter-button'>+</button>
</div>
  )
}

export default AfterCart