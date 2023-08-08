import {createSlice} from"@reduxjs/toolkit";


const INITIAL_STATE={
    cartList:[],
    cartCount:0,
}

const cartSlice= createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
            const itemExist=state.cartList.find((item)=>item.id===action.payload.id);
            if(itemExist){
                state.cartList.forEach((item)=>{
                    if(item?.id===action.payload.id){
                        item.count=1;}
                    })

            }else{
                state.cartList.push({...action.payload,count:1})
            }
            // state.cartCount=1;
            //console.log(action);
            
        },
        increment:(state,action)=>{
            // state.cartCount+=1;
            const productID=action.payload;
            state.cartList.forEach((item)=>{
                if(item?.id===productID){
                    item.count++
                }
            })
        },
        decrement:(state,action)=>{
            // state.cartCount-=1;
            const productID=action.payload;
            state.cartList.forEach((item)=>{
                if(item?.id===productID){
                    item.count--
                }
            })
            
        },
    },

})

export const {addToCart,increment,decrement}= cartSlice.actions;

export default cartSlice.reducer;

















































//import {createSlice} from "@reduxjs/toolkit"

// const INITIAL_STATE={
//     cartList:[],
//     cartCount:0,
// }


// const cartSlice=createSlice({
//     name:"cart",
//     initialstate:INITIAL_STATE,
//     reducers: {
//         addToCart:(state)=>{
//         state.cartCount=1;
//     }},
//     increment:((state)=>{
//         state.cartCount+=1
//     }),
//     decrement:((state)=>{
//         state.cartCount-=1
//     })
// })

// export const {addToCart,increment,decrement}=cartSlice.actions;

// export default cartSlice.reducer

