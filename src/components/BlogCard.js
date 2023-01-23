import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" alt="blogimage" className='img-fluid w-100'/>
          </div>
          <div className="blog-content">
            <p className="date">6 Jan 2023</p>
            <h5 className="title">Beautiful Sunday Morning Rennaisance</h5>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos ipsam nihil laboriosam eaque vitae porro perspiciatis atque corrupti quae inventore,
                 nostrum nemo optio ratione itaque autem maxime officiis alias eum! </p>
            <Link to='/blog/:id' className='button'>Read More</Link>
          </div>
        </div>
  )
}

export default BlogCard