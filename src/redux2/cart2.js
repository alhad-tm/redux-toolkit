import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    cartList:[],
    cartCount:0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addTocart:(state)=>{
            state.cartCount=1;
        },
        increment:(state)=>{
            state.addTocart+=1;
        },
        decrement:(state)=>{
            state.addTocart-=1;
        } 
    } 
})

export const {addTocart,increment,decrement}= cartSlice.actions;

export default cartSlice.reducer; 

// import { createSlice } from "@reduxjs/toolkit";

//  const INITIAL_STATE={
//     carlistt:[],
//     cart:0

// }
   


// const cartSlice=createSlice({
//     name:"cart",
//     initialState:INITIAL_STATE,
//     reducers:{
//         addtoCart:(state)=>{
//             state.cartcount=1
//         },
//         increment:(state)=>{
//             state.addtoCart=state.addtoCart+1
//         },
//         decrement:(state)=>{
//             state.addtoCart=state.addtoCart-1
//         },
//     }
// })

// export const{addtoCart,increment,decrement}=cartSlice.actions

// export default cartSlice.reducer