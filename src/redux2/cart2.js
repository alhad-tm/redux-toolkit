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
            state.cartCount+=1;
        },
        decrement:(state)=>{
            state.cartCount-=1;
        } 
    } 
})

export const {addTocart,increment,decrement}= cartSlice.actions;
export default cartSlice.reducer; 




// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE={
//     cartlist:[],
//     cartCount:0,
// }


// const cartSlice=createSlice({
//     name:"cart",
//     initialState:INITIAL_STATE,
//     reducers:{
//         addTocart:(state)=>{
//             state.cartCount=1
//         },
//         increment:(state)=>{
//             state.cartCount+=1
//         },
//         decrement:(state)=>{
//             state.cartCount-=1
//         }
//     }
// })

// export const {addTocart,increment,decrement}=cartSlice.actions;

// export default cartSlice.reducer;
