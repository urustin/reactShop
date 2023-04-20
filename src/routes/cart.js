import { Table } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';


function Cart(){


// let a = useSelector((state)=>{return state.user});
// let cartData = useSelector((state)=> {return state.cartData});
let cartData = JSON.parse(localStorage.getItem("localCart"));

let dispatch = useDispatch();

console.log(cartData);

    return (
        <>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                {
                    cartData.map((items,index)=>{ 

                        return (
                        <>
                        <tbody>
                            <tr>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.quantity}</td>
                            <td>{items.price*items.quantity}</td>
                            <td style={{display : "none"}}>{index}</td>
                            </tr>
                            
                        </tbody>
                        
                        </>
                        )
                    })
                }
                
            </Table> 
        </>
        

    )
}

export default Cart;