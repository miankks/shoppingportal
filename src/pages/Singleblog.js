import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
import Metahead from '../components/Metahead';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Container from '../components/Container';

const Singleblog = () => {
  return (
    <>
       <Metahead metaTitle='Blog'/>
      <BreadCrumb title='Blog'/>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                  <h3 className="title">
                    A Beautiful Sunday Morning Renaissance
                  </h3>
                  <img src="/images/blog-1.jpg" className='img-fluid my-4 blog-image' alt="blog-1" />
                  <Link to={'/blogs'} className="d-flex align-items-center gap-10"> <AiOutlineArrowLeft />Go back to blogs</Link>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                      Dolores nostrum ad dignissimos aliquam cum, debitis tempora maiores? 
                      Aspernatur dolorem modi accusamus quaerat corporis. Sequi voluptates 
                      quasi saepe doloremque ut voluptas.</p>
                </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Singleblog