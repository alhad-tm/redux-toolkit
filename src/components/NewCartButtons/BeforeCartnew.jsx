import React  from 'react'
import  "./Cbuttons.css"
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux2/cart2';



const BeforeCartnew = () => {

  const dispatch=useDispatch();

  return (
    <div className='before-cart'>
        <button onClick={()=>dispatch(addTocart())} className='add-cart-button'>Add to cart </button>
      
    </div>
  )
}

export default BeforeCartnew
