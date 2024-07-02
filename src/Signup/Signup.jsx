import React from 'react';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import './signuo.css'
const Signup = () =>{
  return(
    <div>
      <Mynav/>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className='col-md-6 text-center my-5 py-4'>
          <p className='fs-1 fw-bolder'>SIGN UP</p>
          <input type="text" placeholder='First name' className='mt-3'/><br />
          <input className='mt-3' type="text" placeholder='Last name'/><br />
          <input type="email" placeholder='Email' className='mt-3'/><br />
          <input className='mt-3' type="password" placeholder='Password'/><br />
          <button class="btn promo-button" type="submit">Create account</button>
          <a href="" className=''><p className='fs-6 mt-4'>Login</p></a>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Signup;