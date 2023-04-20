import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeLocalCart } from '../store.js';




function Detail(props){
    
    let items = useSelector((state)=> {return state.itemData[0]})
    let {itemNumber} = useParams();
    for(let i=1;i<items.length;i++){
        if(i === items.id){
            itemNumber = i;
        }
    }
    let cartNumber =0;
    let dispatch = useDispatch();
        // console.log(itemNumber);
    const addCart = ()=>{
        console.log(cartNumber);
        cartNumber++;
        let copy = JSON.parse(localStorage.getItem("localCart"));
        // console.log(copy)
        let selectItem = {
            id : items[itemNumber].id,
            title : items[itemNumber].title,
            price : items[itemNumber].price,
            quantity : cartNumber
        }
        if(cartNumber===1){
            copy.push(selectItem);
            // dispatch(changeLocalCart());
        }else{
            // console.log(copy[copy.length-1])
            copy[copy.length-1].quantity++;
            
        }
        

        localStorage.setItem('localCart', JSON.stringify(copy));
        
        dispatch(changeLocalCart());
        const footer = document.querySelector("#footerFix");
        footer.classList.remove("none");
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={`${process.env.PUBLIC_URL}/cloth00${items[itemNumber].id}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{items[itemNumber].title}</h4>
                    <p>{items[itemNumber].content}</p>
                    <p>{items[itemNumber].price}AUD</p>
                    <button className="btn btn-danger" onClick={addCart}>Add to Cart</button>
                    </div>
                </div> 
            </div>
        </>
        )
        
}



export default Detail;