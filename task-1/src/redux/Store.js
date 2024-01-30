import {configureStore} from "@reduxjs/toolkit" 
import resultReducer from "./ResultSlice"

export const Store=configureStore({
    reducer:{
        resultReducer:resultReducer
    }
})