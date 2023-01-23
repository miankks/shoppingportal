import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import Metahead from '../components/Metahead';

const Shippingpolicy = () => {
  return (
    <>
      <Metahead metaTitle='Shipping Policy'/>
      <BreadCrumb title='Shipping Policy'/>
      <Container class1="shipping-wrappper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="shipping">
                
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Shippingpolicy