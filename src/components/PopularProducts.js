import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Metahead from '../components/Metahead';

const PopularProducts = () => {
  return (
    <>
    <Metahead metaTitle='Popular Products'/>
      <BreadCrumb title='Popular Products'/>
      <div className='col-2'>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to={'/'}><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" alt="watch" className='img-fluid'/>
            <img src="/images/watch1.jpg" alt="watch" className='img-fluid'/>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Buy an exclusive ring for wedding</h5>
            <ReactStars 
                count={5}
                size={14}
                value={3}
                edit={false}
                activeColor="#ffd700"/>
            <p className="product-price">$1000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to={'/'}>
                <img src="/images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link to={'/'}>
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link to={'/'}>
                <img src="/images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularProducts