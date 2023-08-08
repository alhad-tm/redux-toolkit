 import React from 'react'
import { itemList } from '../../api/Items'
import { useSelector } from 'react-redux'
import "./ProductList.css"
import CartButtons from './CartButtons'


const ProductList = () => {
 const {cartList} = useSelector((state)=>state.cart)
 console.log(cartList,"cart");
  
    
    // const[count,setCount]=useState(0)
    // console.log(cartCount);
   
    // const addToCart=()=>{
    //     setCount(1)
    // }
   
  return (
   <div className="productlist">
    {itemList.map((product,i)=>{
        return(
            <div className="listc" key={i}>
                <img src={product?.image} alt=""  width={130} height={100}/>  
                <h3 className='htitle'>{product?.title}</h3>
               <CartButtons product={product}/> 
            </div> 
        )
    })}
   </div>
  )
}

export default ProductList