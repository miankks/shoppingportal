import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Metahead from '../components/Metahead';


const Resetpassword = () => {
  return (
    <>
      <Metahead metaTitle='Reset password'/>
      <BreadCrumb title='Reset password'/>
      <Container class1='singup-wrapper py-5 home-wrapper-2'>
          <div className="row">
          <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Reset password</h3>
                <form action="" className='d-flex flex-column gap-15'>
                    <CustomInput type="password" name='password' className='form-control' placeholder='Password'/>
                    <CustomInput type="password" name='confpassword' className='form-control' placeholder='Confirm Password'/>
                  <div>
                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0' type='submit'>Reset</button>
                      {/* <Link to={'/signup'} className='button'>Signup</Link> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Resetpassword