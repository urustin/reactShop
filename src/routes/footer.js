import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';

function Footer(){
    let priceAll=0;
    let cartData = useSelector((state)=> {return state.redux_LocalCart});
    // let [cartData, setCartData] = useState(0);
    // let cartData = JSON.parse(localStorage.getItem("localCart"));
    console.log(cartData);
    if(cartData!==null){
        cartData.map(items=>{
            return priceAll += items.price*items.quantity;
        });
    }
    // let [price,setPrice] = useState(0);
    // // console.log(price)
    
    
    // console.log(priceAll)
    // // setPrice(priceAll)
    

    return (
        <>
        <div id="footerFix">
            <div id="footer">
            
                <div className="ft_itemBox">
                    {/* <div className="ft_itemName"> put in your cart.</div> */}
                    <div>go cart(not yet)</div>
                </div>
                <div className="ft_priceBox">
                    <span>{priceAll}</span>
                </div>
                
            
            
            </div>
        </div>
        </>
        

    )
}

export default Footer;