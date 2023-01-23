import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Metahead from '../components/Metahead';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Metahead metaTitle='Contact'/>
      <BreadCrumb title='Contact'/>
      <Container class1="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.39963672019!2d17.841971206254794!3d59.326066813978386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1sen!2sse!4v1673741366305!5m2!1sen!2sse" 
                    width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" title='our office'></iframe>
            </div>
            <div className="row mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" className="form-control" placeholder='Name'/>
                      </div>
                      <div>
                        <input type="text" className="form-control" placeholder='Email*' />
                      </div>
                      <div>
                        <input type="tel" className="form-control" placeholder='Mobile Number'/>
                      </div>
                      <div>
                        <textarea name="" id="" cols="30" rows="4" className='w-100 form-control' placeholder='Comments'></textarea>
                      </div>
                      <div>
                      <button className='button border-0'>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title">Get in touch with us</h3>
                    <div>
                      <ul className='ps-0'>
                        <li className='mb-3 d-flex gap-10 align-items-center'><AiOutlineHome />
                          <address className='mb-0'>Odenplan, Stockholm, 19587, Sweden</address>
                        </li>
                        <li className='mb-3 d-flex gap-10 align-items-center'><AiOutlinePhone />
                          <a href="tel:+46712345678">+46 712345678</a>
                        </li>
                        <li className='mb-3 d-flex gap-10 align-items-center'><AiOutlineMail />
                          <a href="mailto:miankks@gmail.com">miankks@gmail.com</a>
                        </li>
                        <li className='mb-3 d-flex gap-10 align-items-center'><AiOutlineInfoCircle />
                          <p className='mb-0'>Monday - Friday 10am - 8pm</p>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact