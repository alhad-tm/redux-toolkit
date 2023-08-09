import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart2";


export const store2 = configureStore({
    reducer:{
        cart:cartReducer
    }
})  


// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cart2"

// export const store2= configureStore({
//     reducer:{
//         cart:cartReducer   
//     }
// })