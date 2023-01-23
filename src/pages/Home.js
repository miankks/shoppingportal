import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import PopularProducts from '../components/PopularProducts'
import FamousProducts from '../components/FamousProducts'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
      <section className="">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="/images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
                <div className="main-banner-content position-absolute">
                  <h4>Super Charged for pros.</h4>
                  <h5>IPAD S13+ PRO</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="/images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 <br />or $64.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="/images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smart Watch 7</h5>
                    <p>Shop the latest band<br /> styles and colors</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="/images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599.00 <br />or $49.91/mo for 24 mo*</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="/images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br />ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {
                  services.map((service, index) => {
                    return (
                      <div className='d-flex align-items-center gap-15' key={index}>
                    <img src={service.image} alt="services" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className='mb-0'>{service.tagline}</p>
                    </div>
                  </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
      </Container>
      <Container class1='homewrapper-3 py-5'>
      <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart watches</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart watches</h6>
                    <p>10 items</p>
                  </div>
                    <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
            <div className="row">
              <div className="col-12">
              <h3 className="section-heading">Famous Products</h3>
            </div>
            <div className="row">
             <FamousProducts />
              </div>
          </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>
      
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
              <PopularProducts />
              <PopularProducts />
              <PopularProducts />
              <PopularProducts />
          </div>
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="marqueeimages " />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="marqueeimages" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="marqueeimages" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="marqueeimages" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="marqueeimages" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="marqueeimages" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="marqueeimages" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-08.png" alt="marqueeimages" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home