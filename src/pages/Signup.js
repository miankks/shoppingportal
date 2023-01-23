import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Metahead from '../components/Metahead';

const Signup = () => {
  return (
    <>
      <Metahead metaTitle='Signup'/>
      <BreadCrumb title='Signup'/>
      <Container class1='singup-wrapper py-5 home-wrapper-2'>
          <div className="row">
          <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Signup</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <CustomInput type='text' name='name' placeholder='Name' className='form-control'/>
                  <CustomInput type="email" name='email' className='form-control' placeholder='Email'/>
                  <CustomInput type="tel" name='mobile' className='form-control' placeholder='Mob number'/>
                  <CustomInput type="password" name='password' className='form-control' placeholder='Password'/>
                  <div>
                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0' type='submit'>Create</button>
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

export default Signup