import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'



function Cart() {

  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  const [total,setTotal] = useState(0)
  const getCartTotal = () => {

  if(cartArray.length >  0) {
    setTotal(cartArray.map(item => item.price).reduce((p1,p2) => p1+p1))
  }
  else {
    setTotal(0)
  }
}

  useEffect(() => {
       getCartTotal()
  }, [cartArray])

  const navigate = useNavigate()

  const handleCart = () =>{
    dispatch(emptyCart())
    alert("Order placed successfully,Thank you for purchasing..😃")
    navigate('/')
  }

  return (
    <>
      <div className="container ms-5" style={{marginTop:"90px"}}>
        {
          cartArray?.length > 0 ?
            <div className="row mt-5">
              <div className="col-lg-8">
                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>product</th>
                      <th>product image</th>
                      <th>price</th>
                      <th>action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      cartArray.map((product, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td style={{fontFamily:"sans-serif"}}>{product.title}</td>
                          <td><img className='shadow' width={'100px'} height={'100px'} style={{objectFit:"cover",borderRadius:"10px"}} src={product.thumbnail} alt=".." /></td>
                          <td style={{color:"green",fontFamily:"cursive"}}>${product.price}</td>
                          <td><button onClick={() => dispatch(removeFromCart(product.id))} className='btn'><i class="fa-solid fa-trash text-danger fa-2x"></i></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
         
               <div className="col-lg-1"></div>
               <div className="col-lg-3">
                <div className="border mt-3 rounded shadow p-2 w-100">
                  <h2 className='text-primary '> Cart Summary</h2>
                  <h4>Total Products : <span>{cartArray.length}</span></h4> 
                  <h4 className='mt-3'>Total : <span className='text-danger fw-bolder fs-2'>${total}</span></h4>

                  <div className="d-grid">
                    <button onClick={() => handleCart()} className='btn btn-success mt-3 rounded'>Check Out</button>
                  </div>

                </div>
               </div>

            </div>
            : <div style={{ height: '100vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
                               <Link to={'/'} className='btn btn-primary rounded' style={{ textDecoration: "none", fontSize: "15px" ,marginLeft:"100%",width:"200px"}}>&#8592; Back to Home🏡</Link>
                               
            <img style={{objectFit:"contain"}} height={'400px'} width={'400px'} src="https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart.png" alt="wishlist" />
            </div>
        }
      </div>
    </>
  )
}

export default Cart