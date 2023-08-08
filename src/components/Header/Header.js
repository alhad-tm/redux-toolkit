import React from 'react'
// import {RiShoppingBagFill} from "react-icons/ri"
import {UilShoppingCart} from "@iconscout/react-unicons"
import "./Header.css"



const Header = () => {
  return (
    <div className="container">
        <h1>Online store</h1>
        {/* <RiShoppingBagFill size="80"/>  */}
        <UilShoppingCart size="60"/>
    </div>
  )
}

export default Header