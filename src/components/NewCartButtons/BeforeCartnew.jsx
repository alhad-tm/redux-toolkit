import React  from 'react'
import  "./Cbuttons.css"



const BeforeCartnew = ({cartAdd}) => {

  
  return (
    <div className='before-cart'>
        <button onClick={cartAdd} className='add-cart-button'>Add to cart </button>
      
    </div>
  )
}

export default BeforeCartnew
