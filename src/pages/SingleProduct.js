import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb'
import Metahead from '../components/Metahead';
import PopularProducts from '../components/PopularProducts';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Colors'
import { Link, useLocation } from 'react-router-dom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  const props = {width: 400, height: 500, zoomWidth: 600, isFluidWidth: true ,img: "/images/watch1.jpg"};
  let location = useLocation();
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }
  return (
    <>
      <Metahead metaTitle='Product Name'/>
      <BreadCrumb title='Product Name'/>
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props}/>
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div><img src="/images/watch.jpg" alt="" className='img-fluid'/></div>
                <div><img src="/images/watch.jpg" alt="" className='img-fluid'/></div>
                <div><img src="/images/watch.jpg" alt="" className='img-fluid'/></div>
                <div><img src="/images/watch.jpg" alt="" className='img-fluid'/></div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className='title'>Kids headphones bulk 10 pack multi colored for students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-15">
                    <ReactStars 
                      count={5}
                      size={14}
                      value={3}
                      edit={true}
                      activeColor="#ffd700" />
                      <p className='mb-0 t-review'>(2 reviews)</p>
                  </div>
                  <a href="#review" className='review-btn'>Write a review</a>
                </div>
                <div className=" py-3">
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type: </h3>
                    <p className='product-data'>Headsets</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand: </h3>
                    <p className='product-data'>Havells</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Categories: </h3>
                    <p className='product-data'>
                      airpods, camera, computer&laptops, headphone, mini speakers, out store, Portable speakers,
                      smart phones, smart television, smartwatches
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags: </h3>
                    <p className='product-data'>abd</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability: </h3>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size: </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 border-secondary bg-white text-dark'>S</span>
                      <span className='badge border border-1 border-secondary bg-white text-dark'>M</span>
                      <span className='badge border border-1 border-secondary bg-white text-dark'>L</span>
                      <span className='badge border border-1 border-secondary bg-white text-dark'>XL</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color: </h3>
                    <Color />
                  </div> 
                  <div className='d-flex align-items-center gap-10 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity: </h3>
                    <div>
                      <input 
                        className='form-comtrol'
                        type="number"
                        name=''
                        id=''
                        min={1}
                        max={10}
                        style={{width: '50px'}}/>
                    </div>
                    <div className='d-flex align-items-center gap-15 ms-5'>
                      <button className='button border-0' type='submit'>Add to Cart</button>
                      <button  className='button signup'>Buy it now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-column'>
                    <div>
                      <a href="">
                      <TbGitCompare className='fs-5 me-2'/>Add to compare</a>
                    </div>
                    <div>
                      <a href="">
                      <AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a>
                    </div>
                  </div>
                  <div className='d-flex gap-10 my-3'>
                    <h3 className='product-heading'>Shipping & Returns: </h3>
                    <p className='product-data'>
                      Free shipping and returns available on all orders! <br />
                      We ship all US Domestic orders within <b>5-10 bussiness days</b>
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h3 className='product-heading'>Copy product link: </h3>
                    <a href="dangerouslySetInnerHTML:void(0);" onClick={() => copyToClipboard('/images/watch.jpg')}>
                      Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
                <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Provident eius molestias hic magnam. Sapiente iure voluptatum 
                  voluptates ipsam ullam minima eveniet dolorum omnis consequuntur. 
                  Aut, doloribus ipsam? Laboriosam, laudantium corporis!
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container id='review' class1="reviews-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className='mb-2'>Customer reviews</h4>
                    <div className='d-flex gap-10 align-items-center'>
                      <ReactStars 
                          count={5}
                          size={14}
                          value={3}
                          edit={false}
                          activeColor="#ffd700" />
                      <p className='mb-0'>Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (<div>
                    <a href="/" className='text-dark text-decoration-underline'>write a review </a>
                  </div>)}
                </div>
                <div className="review-form py-4">
                  <h4 >Write a review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                      <div>
                      <ReactStars 
                          count={5}
                          size={14}
                          value={5}
                          edit={true}
                          activeColor="#ffd700" />
                      </div>
                      <div>
                        <textarea name="" id="" cols="30" rows="4" className='w-100 form-control' placeholder='Comments'></textarea>
                      </div>
                      <div className='d-flex justify-content-end'>
                        <button className='button border-0'>Submit Review</button>
                      </div>
                    </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className='mb-0'>Mian</h6>
                      <ReactStars 
                            count={5}
                            size={14}
                            value={3}
                            edit={false}
                            activeColor="#ffd700" />
                    </div>
                    <p className='mt-3'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Illo nam temporibus veniam. Doloribus saepe cum totam, 
                      a voluptas in eaque sit aliquam maxime quisquam, alias 
                      fugit accusamus incidunt, quidem ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            {/* <PopularProducts /> */}
            {/* <PopularProducts /> */}
            {/* <PopularProducts /> */}
          </div>
      </Container>
    </>
  )
}

export default SingleProduct