// import { createSlice } from "@reduxjs/toolkit"; 

// const initialState = {resultValues:[]}

// export const ResultSlice =createSlice({
//     name:"resultReducer",
//     initialState,

//     reducers:{
//         storeResultValues:(state,action)=>{
//             state.resultValues.push(action.payload)

//         },
//         updatedValues:(state,action)=>{
//             state.resultValues.splice(action.payload[1],1,action.payload[0])
//             // console.log(action.payload[0])
//             // console.log(action.payload)
//             console.log(state.resultValues)

//         }
//     }
// })

// export const{storeResultValues,updatedValues} = ResultSlice.actions 


import {createSlice} from "@reduxjs/toolkit"

export const ResultSlice=createSlice({
    name:"resultReducer",
    initialState:{resultValues:[]},

    reducers:{
        storeResultValues:(state,action)=>{
            state.resultValues.push(action.payload)
        },

        updatedValues:(state,action)=>{
            state.resultValues.splice(action.payload[1],1,action.payload[0])
        }
    }


})

export const {storeResultValues,updatedValues} = ResultSlice.actions
export default ResultSlice.reducer