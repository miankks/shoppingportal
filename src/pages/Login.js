import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Metahead from '../components/Metahead';

const Login = () => {
  return (
    <>
      <Metahead metaTitle='Login'/>
      <BreadCrumb title='Login'/>
      <Container class1='login-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Login</h3>
                <form action="" className='d-flex flex-column gap-15'>
                    <CustomInput type="email" name='email' className='form-control' placeholder='Email'/>
                    <CustomInput type="password" name='password' className='form-control' placeholder='Password'/>
                  <div>
                    <Link to={'/forgotpassword'}>Forgot your password?</Link>
                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0' type='submit'>Login</button>
                      <Link to={'/signup'} className='button signup'>Signup</Link>
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

export default Login