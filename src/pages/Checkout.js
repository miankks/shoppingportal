import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'


import BreadCrumb from '../components/BreadCrumb'
import Metahead from '../components/Metahead';
import Container from '../components/Container';
const Checkout = () => {
  return (
   <>
     <Metahead metaTitle='Checkout'/>
      <BreadCrumb title='Checkout'/>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Mian Corner</h3>
                <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/cart'} className='text-dark total-price'>Cart</Link></li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                  </ol>
                </nav>
                <h4 className="title total">
                  Contact Information
                </h4>
                <p className="user-details total">abc (abc@abc.com)</p>
                <h4 className='mb-3'>Shipping Address</h4>
                <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                  <div className='w-100'>
                    <select name="" id="" className='form-control form-select'>
                      <option value="" selected disabled>Select Country</option>
                    </select>
                  </div>
                  {/* <div className='w-100'>
                    <select name="" id="" className='form-control form-select'></select>
                  </div> */}
                  <div className='flex-grow-1'>
                    <input type="text" className="form-control" placeholder='First Name'/>
                  </div>
                  <div className='flex-grow-1'>
                    <input type="text" className="form-control"  placeholder='Last Name'/>
                  </div>
                  <div className='w-100'>
                    <input type="text" className="form-control" placeholder='Address'/>
                  </div>
                  <div className='w-100'>
                    <input type="text" className="form-control" placeholder='Apartment, Suite, etc (Optional)'/>
                  </div>
                  <div className='flex-grow-1'>
                  <input type="text" className="form-control" placeholder='City'/>
                  </div>
                  <div className='flex-grow-1'>
                  <select name="" id="" className='form-control form-select'>
                    <option value="" selected disabled>Select State</option>
                  </select>
                  </div>
                  <div className='flex-grow-1'>
                  <input type="number" className="form-control" placeholder='zipcode'/>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mt-5">
                      <Link to={'/cart'} className='text-dark'><BiArrowBack className='me-2'/> Return to Cart</Link>
                      <Link to={'/shipping'} className='button'>Continue to Shipping</Link> 
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className='product-item border-bottom py-4'>
                <div className='d-flex gap-10 mb-2 align-items-center'>
                  <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                      <span style={{top: '-10px', right: '2px'}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                      1
                      </span>
                      <img src="/images/watch.jpg" alt="product" className='img-fluid' />
                    </div>
                    <div>
                      <h5 className="total-price">watch</h5>
                      <p className="total-price">some information</p>
                    </div>
                  </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$ 100</h5>
                </div>
                </div>
              </div>
              <div className='border-bottom py-4'>
                <div className='subtotal d-flex justify-content-between align-items-center'>
                  <p className='total'>Subtotal:</p>
                  <p className='total-price'>$ 1000</p>
                </div>
                <div className='shipping d-flex justify-content-between align-items-center'>
                  <p className='mb-0 total'>Shipping: </p>
                  <p className='mb-0 total-price'>$19</p>
                </div>
              </div>
                <div className='total-section d-flex justify-content-between align-items-center border-bottom py-4'>
                  <h4 className='total'>Total:</h4>
                  <h5 className='total-price'>$ 1000</h5>
                </div>
            </div>
          </div>
      </Container>
   </>
  )
}

export default Checkout