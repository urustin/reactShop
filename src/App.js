
import './App.css';
import Detail from './routes/detail';
import About from './routes/about';
import Cart from './routes/cart';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeItembyPrice } from './store.js';

function App() {
  useEffect(()=>{
    
    if(localStorage.length===0){
      let selectArray = [];
      localStorage.setItem("localCart",JSON.stringify(selectArray));
      const footer = document.querySelector("#footerFix");
      footer.classList.add("none");
    }
    
    
  },[]) 
  // let {id} = useParams();
  // console.log();
  // let [items, setItems] = useState({itemData});
  
  let navigate = useNavigate();
  let changed = !false;
  // console.log(changeItembyPrice);
  




  return (
    
    <div className="App">
      <>

      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      <Routes>

        <Route path ="/" element={
        <MainPage changed = {changed} ></MainPage>
        }>
          
        </Route>

        <Route path ="/home" element={<div>home</div>}></Route>
        <Route path="/detail/:itemNumber" element={<Detail/>}/> 
        <Route path ="/cart" element={
          <>
          <Cart></Cart>
          </>
        }>
        </Route>

        
      </Routes>



    </div>
  );
}




function MainPage(props){
  
  let items = useSelector((state)=> {return state.itemData});
  // console.log(items)
  let dispatch = useDispatch();
  return(
  <>
        {/* <div className='main_img'>mainImg</div> */}

        <button className='arrangeByPrice' onClick={()=>{dispatch(changeItembyPrice())}}>arrangeByPrice</button>
        {/* <button className='arrangeByName'>arrangeByName</button> */}

          <Container>
          
            <Row>
              {
                items[0].map(function(a,i){
                  // console.log(a)
                  return(
                  <>
                    {
                      props.changed ? <Post  items = {a} key={i}></Post> : ""
                    }
                    
                  </>
                  )
                })
              }
            </Row>
            
            </Container>
  </>
  )
 }


function Post(props){
  let navigate = useNavigate();
  //  console.log(`${process.env.PUBLIC_URL}/cloth001.jpg`)
  // console.log(props);
  // console.log(pwd);
  // console.log("Current directory:", __dirname);
  
  return(
    <Nav.Link onClick={()=>{navigate(`/detail/${props.items.id}`)}}>
      <Col sm className = {"id"+props.items.id} key={props.items.id}>

        
        
        <img src={`${process.env.PUBLIC_URL}/cloth00${props.items.id}.jpg`} width="80%"></img>
        <h4>{props.items.title}</h4>
        <p>{props.items.content}</p>
        <p>{props.items.price}$</p>
        {/* console.log(itemData[i]); */}
      </Col>
    </Nav.Link>
  )
}









export default App;
