import React from 'react'
import  "./Cbuttons.css"
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux2/cart2';

const Aftercartnew = () => {

  const {cartCount} = useSelector((state)=>state.cart)
  const dispatch =useDispatch(); 
  
  return (
    <div className='after-cart'>
        <button onClick={()=>dispatch(decrement())} className='cart-counter-button'>-</button>
        <div className='cart-count'>{cartCount}</div>
        <button onClick={()=>dispatch(increment())} className='cart-counter-button'>+</button>
      
    </div>
  )
}

export default Aftercartnew 
  