import {createSlice} from "@reduxjs/toolkit"

// const initalState:{resultValues:[]}

const QuestionSlice=createSlice({
    name:"questionReducer",
    initialState:{resultValues:[]},
    reducers:{
        addValuesToResult:(state,action)=>{
            state.resultValues.push(action.payload)
            console.log(action.payload)
        },
        updateValues:(state,action)=>{
            state.resultValues.splice(action.payload[1],1,action.payload[0])

        }
        
    }


})

export const {addValuesToResult,updateValues} = QuestionSlice.actions

export default QuestionSlice.reducer