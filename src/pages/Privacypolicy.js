import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import Metahead from '../components/Metahead';
const Privacypolicy = () => {
  return (
    <>
       <Metahead metaTitle='Privacy Policy'/>
      <BreadCrumb title='Privacy Policy'/>
      <Container class1="policy-wrappper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Privacypolicy