import React  from 'react'
import "./ProductList2.css"
import { itemList } from '../../api/Items'
import BeforeCartnew from '../NewCartButtons/BeforeCartnew'
import Aftercartnew from '../NewCartButtons/Aftercartnew'
import { useSelector } from 'react-redux'
// import { addToCart } from '../../redux/cart'

const ProductList2 = () => {
    const {cartCount} = useSelector((state)=>state.cart)
  
   
  return ( 


    <div className='productlist'>
       {itemList?.map((product,key)=>(
        <div className='listc' key={key} >
            <img src={product?.image} alt="" width={130} height={100} />
            <h3 className='htitle'>{product.title}</h3> 
            {cartCount>0?    <Aftercartnew/>:   <BeforeCartnew  /> } 
         
        </div>
       ))}
    </div>
  )
}

export default ProductList2
