import { createSlice } from '@reduxjs/toolkit'

let cartData = createSlice({
    name : "cartData",
    initialState : 
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        addcount(state,action){
            // state[0].count++
            console.log(state[action.payload].count++);
            
            
        }
    }
    
})

export let { addcount } = cartData.actions;
export default cartData