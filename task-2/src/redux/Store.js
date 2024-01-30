import {configureStore} from "@reduxjs/toolkit"
import QuestionSlice from "./QuestionSlice"

export const store=configureStore({
    reducer:{
        QuestionSlice
    }
})

