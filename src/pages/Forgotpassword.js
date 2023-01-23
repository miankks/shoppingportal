import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Metahead from '../components/Metahead';

const Forgotpassword = () => {
  return (
    <>
      <Metahead metaTitle='Forgot Password'/>
      <BreadCrumb title='Forgot Password'/>
      <Container class1='singup-wrapper py-5 home-wrapper-2'>
          <div className="row">
          <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Reset your password</h3>
                <p className='text-center my-2 mb-3'>We dill send you an email to reset password</p>
                <form action="" className='d-flex flex-column gap-15'>
                    <CustomInput type="email" name='email' className='form-control' placeholder='Email'/>
                  <div>
                    <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                      <button className='button border-0' type='submit'>Submit</button>
                      <Link to={'/login'} className='button forgot-password-cancel'>Cancel</Link>
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

export default Forgotpassword