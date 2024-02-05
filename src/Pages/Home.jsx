import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'



function Home() {

  const data = useFetch("https://dummyjson.com/products")
  // console.log(data);

  const dispatch = useDispatch()

  return (
    <>
      <Row className='ms-5' style={{ marginTop: "100px" }}>

        {
          data?.length > 0. ? data?.map((products, index) => (

            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem', height: '30rem' }} className='shadow rounded '>
                <Card.Img variant="top" height={'200px'} src={products.thumbnail} alt='products' />
                <Card.Body>
                  <Card.Title style={{ fontFamily: "sans-serif" }}>{products?.title}</Card.Title>
                  <Card.Text style={{ fontFamily: "sans-serif" }}>
                    <p>{products?.description.slice(0, 55)}...</p>
                  </Card.Text>
                  <div className='d-flex'>
                  <Card.Text><h5 style={{ color: "green",marginRight:"10px" }}>${products?.price}</h5>  </Card.Text>
                  <Card.Text style={{ fontSize: "10px", backgroundColor: "red", height: "20px", borderRadius: "10px", padding: "3px" ,color:"white"}}>-{products?.discountPercentage}%</Card.Text>
                  </div>

                  <div className='d-flex justify-content-between '>
                    <Button onClick={() => dispatch(addToWishlist(products))} variant="btn" style={{border:"none"}}><i class="fa-solid fa-heart text-danger fa-2x"></i></Button>
                    <Button onClick={() => dispatch(addToCart(products))}  variant="btn" style={{border:"none"}}><i class="fa-solid fa-shopping-cart text-success fa-2x"></i> </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='text-danger fs-4 fw-bolder'>Nothing to Display</p>
        }
      </Row>
    </>
  )
}

export default Home