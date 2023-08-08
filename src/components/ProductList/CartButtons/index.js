import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';

const CartButtons = ({product}) => {
    const {cartList}= useSelector((state)=>state.cart)
//  useMemo is not necessary here,just to show it will optimise rerenders
    const cartCount=useMemo(()=>{
        // console.log(cartList,"clist");
        return cartList?.find((item)=>item?.id===product?.id)?.count;
    },[cartList])

    console.log(cartCount ,"=count");
  return (
    <div>
    {cartCount>0 ? <AfterCart productID={product?.id} cartCount={cartCount} /> : <BeforeCart product={product}/>}   
    </div>
  )
}

export default CartButtons