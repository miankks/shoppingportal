import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import Metahead from '../components/Metahead';


const WishList = () => {
  return (
    <>
       <Metahead metaTitle='Wishlist'/>
      <BreadCrumb title='Wishlist'/>
      <Container class1='wishlist-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                </div>
                <div className='px-3 py-3'>
                  <h5 className="title">Honor T7 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                </div>
                <div className='px-3 py-3'>
                  <h5 className="title">Honor T7 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                </div>
                <div className='px-3 py-3'>
                  <h5 className="title">Honor T7 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                </div>
                <div className='px-3 py-3'>
                  <h5 className="title">Honor T7 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default WishList