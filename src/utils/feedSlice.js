import { createSlice } from "@reduxjs/toolkit";
import { create } from "axios";

const feedSlice=createSlice({
    name:"feed",
    initialState:[],
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },
        removeUserFromFeed:(state,action)=>{
                const newFeed=state.filter((user)=>user._id!==action.payload)
                return newFeed
        },
        clearFeed:()=>{
            return [];
        }
    }
})

export const {addFeed,removeUserFromFeed,clearFeed}=feedSlice.actions
export default feedSlice.reducer