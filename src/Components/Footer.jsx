import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
         <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <i class="fa-solid fa-cart-shopping" style={{marginRight:"5px"}}></i> 
                E-cart
              </h6>
              <p style={{textAlign:"justify"}}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a  className='text-reset'>
                <Link to={'/'} style={{color:"grey" , textDecoration:'none'}}> Home</Link>
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                <Link to={'/cart'} style={{color:"grey" , textDecoration:'none'}}> Cart</Link>
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                <Link to={'/wishlist'} style={{color:"grey" , textDecoration:'none'}}> Wishlist</Link>
                 
                </a>
              </p>
            
            </MDBCol>

       

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          E-Cart.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer