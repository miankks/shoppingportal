import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import Metahead from '../components/Metahead';

const Refundpolicy = () => {
  return (
    <>
      <Metahead metaTitle='Refund Policy'/>
      <BreadCrumb title='Refund Policy'/>
      <Container class1="refund-wrappper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="refund">
                
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Refundpolicy