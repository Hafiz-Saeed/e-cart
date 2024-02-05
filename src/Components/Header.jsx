import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=> state.cartReducer)

  return (
    <>
        
        <Navbar style={{zIndex:1,position:"fixed",top:"0",width:"100%"}} expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand> <Link to={'/'} style={{color:"black",fontWeight:"bold",textDecoration:"none"}}>  <i class="fa-solid fa-truck-fast  me-2"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='me-2'><Link to={'/wishlist'} style={{color:"black",fontWeight:"bold",textDecoration:"none"}}>  <i class="fa-solid fa-heart text-danger"></i> Wish List
            <Badge className='rounded ms-2 bg-success'>{wishlist?.length}</Badge>
            </Link></Nav.Link>

            <Nav.Link ><Link to={'/cart'} style={{color:"green",fontWeight:"bold",textDecoration:"none"}}>  <i class="fa-solid fa-shopping-cart "></i> Cart
            <Badge className='rounded ms-2 bg-success'>{cart?.length}</Badge>
            </Link></Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header