import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'




function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()

  const handleWishlistCart = (products) => {
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))
  }

  return (
    <>

      <Row  className='ms-5' style={{ marginTop: "100px" }}>
        {
          wishlistArray.length > 0 ?
            wishlistArray.map((products, index) => (


              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', height: '30rem' }} className='shadow rounded'>
                  <Card.Img variant="top" height={'200px'} src={products?.thumbnail} alt='products' />
                  <Card.Body>
                    <Card.Title style={{ fontFamily: "sans-serif" }}>{products?.title}</Card.Title>
                    <Card.Text style={{ fontFamily: "sans-serif" }}>
                      <p>{products?.description.slice(0, 55)}...</p>
                    </Card.Text>
                    <div className='d-flex'>
                      <Card.Text><h5 style={{ color: "green", marginRight: "10px" }}>${products?.price}</h5>  </Card.Text>
                      <Card.Text style={{ fontSize: "10px", backgroundColor: "red", height: "20px", borderRadius: "10px", padding: "3px", color: "white" }}>-{products?.discountPercentage}%</Card.Text>
                    </div>

                    <div className='d-flex justify-content-between '>
                      <Button onClick={()=> dispatch(removeFromWishlist(products.id))} variant="btn"><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
                      <Button onClick={() => handleWishlistCart(products)} variant="btn"><i class="fa-solid fa-shopping-cart text-success fa-2x"></i> </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) : <div style={{ height: '100vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <Link to={'/'} className='btn btn-primary rounded' style={{ textDecoration: "none", fontSize: "15px" ,marginLeft:"950px",width:"200px"}}>&#8592; Back to Home🏡</Link>
              <img style={{objectFit:"contain"}} height={'400px'} width={'400px'} src="https://hey.brodox.com/assets/dist/images/empty-bag.gif" alt="wishlist" />
            </div>
        }
      </Row>

    </>
  )
}

export default Wishlist