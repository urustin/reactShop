import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartData from "./store/cartData.js";
import itemData from './data.js';


var _ = require('lodash');


// console.log(itemData);
// import { useState } from 'reacAt';

let user = createSlice({
    name:"user",
    initialState : "kim"
})

let stock = createSlice({
    name : "stock",
    initialState : [1,2,3,5]
})



let reduxItemData = createSlice({
    name : "itemData",
    initialState : itemData,
    reducers :{
        changeItembyPrice(){
            
            let copy = _.cloneDeep(itemData);

            copy[0].sort((a,b)=>{
                return a.price-b.price;
            })

            return copy;
        }
        // ,

        // changeItembyName(){
        //     let copy = _.cloneDeep(itemData);
        //     copy.sort();
        //     return copy;
        // }

    }

})

export let { changeItembyPrice } = reduxItemData.actions;


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer,
    itemData : reduxItemData.reducer
   }
}) 