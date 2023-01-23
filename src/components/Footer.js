import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input type="text" className="form-control py-1" 
                        placeholder="Your Email" 
                         aria-label="Your Email" aria-describedby="basic-addon2" />
                <span className="input-group-text py-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>Hno: 123, <br /> New York <br /> United States</address>
                <a href="tel: +46720252381" className='mt-3 d-block mb-3 text-white'>46720252381</a>
                <a href="mailto: miankks@gmail.com" 
                    className='mt-2 d-block mb-0 text-white'
                    target='_blank' rel='noreferrer'>
                     miankks@gmail.com
                </a>
                     <div className="social-icons d-flex align-items-center gap-30 mt-4">
                        <a href="www.linkdin.com"><BsLinkedin className='text-white fs-6'/></a>
                        <a href="www.instagram.com"><BsInstagram className='text-white fs-6'/></a>
                        <a href="www.github.com"><BsGithub className='text-white fs-6'/></a>
                        <a href="www.youtube.com"><BsYoutube className='text-white fs-6'/></a>
                     </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={'/privacypolicy'} className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to={'/refundpolicy'} className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to={'/shippingpolicy'} className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to={'/termsandconditions'} className='text-white py-2 mb-1'>Terms and Conditions</Link>
                <Link to={'/blogs'} className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Heandphone</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">&copy; {new Date().getFullYear()} Powered by Mian Kakakhels</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer