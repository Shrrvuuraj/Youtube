import { createSlice } from "@reduxjs/toolkit";
const initialState={
     name:"sumit",
     age:"21"
}
const counterSlice=createSlice({
     name:"counter",
     initialState,
     reducers:{
          changeName:(state,action)=>{
               state.name=action.payload
          }
     }
})

export const {changeName}=counterSlice.actions
export default counterSlice.reducer