import React from 'react'

const FamousProducts = () => {
  return (
    <>
       <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-1.jpeg" alt="iWatch" className='img-fluid'/>
                  <div className="famous-content position-absolute">
                    <h5>Big Screen </h5>
                    <h6>Smart watch Series 7</h6>
                    <p>From $399 or $16.62/mo for 24 mo.*</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famousproduct-2.webp" alt="macbook" className='img-fluid'/>
                  <div className="famous-content position-absolute">
                    <h5 className='text-dark'>Studio Display </h5>
                    <h6 className='text-dark'>600 nits of Brightness</h6>
                    <p className='text-dark'>27 inch 5k ratina display</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famousproduct-3.webp" alt="iWatch" className='img-fluid'/>
                  <div className="famous-content position-absolute">
                    <h5 className='text-dark'>Smartphones </h5>
                    <h6 className='text-dark'>Smartphone 13 pro</h6>
                    <p className='text-dark'>Now in Green From $999 or $41.62/mo for 24 mo.*</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famousproduct-4.webp" alt="iWatch" className='img-fluid'/>
                  <div className="famous-content position-absolute">
                    <h5 className='text-dark'>Home Speakers </h5>
                    <h6 className='text-dark'>Room filling sound</h6>
                    <p className='text-dark'>From $699 or $116.62/mo for 12 mo.*</p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default FamousProducts