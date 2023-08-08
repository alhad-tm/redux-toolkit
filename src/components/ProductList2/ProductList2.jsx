import React ,{ useState } from 'react'
import "./ProductList2.css"
import { itemList } from '../../api/Items'
import BeforeCartnew from '../NewCartButtons/BeforeCartnew'
import Aftercartnew from '../NewCartButtons/Aftercartnew'
import { useSelector } from 'react-redux'
// import { addToCart } from '../../redux/cart'

const ProductList2 = () => {
    const cart = useSelector((state)=>state.cart)
    console.log(cart,"cart is shown");

    const [count,setCount]=useState(0)

    const cartAdd=()=>{
        setCount(count+1)
        console.log(count)
    }

   

   
  return (


    <div className='productlist'>
       {itemList?.map((product,key)=>(
        <div className='listc' key={key} >
            <img src={product?.image} alt="" width={130} height={100} />
            <h3 className='htitle'>{product.title}</h3> 
            {count>0?    <Aftercartnew/>:   <BeforeCartnew  cartAdd={cartAdd}/> } 
         
        </div>
       ))}
    </div>
  )
}

export default ProductList2
