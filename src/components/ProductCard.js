import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
  const { grid } = props 
  let location = useLocation();
  return (
    <>
      <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
      <Link to={`${location.pathname==='/' ? '/product/:id': location.pathname=== "/product/:id" ? "product/1" :":id"}`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src="/images/wish.svg" alt="wishlist" /></button>
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
          <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
             adipisci dolor error eveniet aut vitae fugiat exercitationem est 
            cumque sint alias tempore culpa consectetur eaque quam cupiditate. 
            Dolorum, modi dolorem.
          </p>
          <p className="product-price">$1000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent'>
              <img src="/images/prodcompare.svg" alt="prodcompare" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src="/images/view.svg" alt="view" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src="/images/add-cart.svg" alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
      <Link to={`${location.pathname==='/' ? '/product/:id': location.pathname=== "/product/:id" ? "product/1" :":id"}`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src="/images/wish.svg" alt="wishlist" /></button>
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
          <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus voluptatibus, delectus neque eligendi repellendus, 
            omnis quae incidunt est distinctio atque vitae temporibus minus? Aperiam, 
            voluptates natus provident unde ad impedit.
          </p>
          <p className="product-price">$1000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent'>
              <img src="/images/prodcompare.svg" alt="prodcompare" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src="/images/view.svg" alt="view" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src="/images/add-cart.svg" alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default ProductCard;