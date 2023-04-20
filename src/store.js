import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartData from "./store/cartData.js";
import itemData from './data.js';


var _ = require('lodash');
let reduxCartData = JSON.parse(localStorage.getItem("localCart"));

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
    }
})

let redux_LocalCart = createSlice({
    name : "redux_localCart",
    initialState : reduxCartData,
    reducers :{
        changeLocalCart(){
            
            let copy = reduxCartData = JSON.parse(localStorage.getItem("localCart"));
            console.log(copy);

            return copy;
        }
    }
    
})

export let { changeItembyPrice } = reduxItemData.actions;
export let { changeLocalCart } = redux_LocalCart.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer,
    itemData : reduxItemData.reducer,
    redux_LocalCart : redux_LocalCart.reducer,
   }
}) 