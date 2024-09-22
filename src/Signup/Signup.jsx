import React, { useState } from 'react';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import './signuo.css';
import {Link} from 'react-router-dom';
const Signup = () =>{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required.');
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    setSuccess('Account created successfully!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setError('');
  };
  return(
    <div>
      <Mynav/>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className='col-md-6 text-center my-5 py-4'>
          <p className='fs-1 fw-bolder'>SIGN UP</p>
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='First name'
          className='mt-3 input'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder='Last name'
          className='mt-3 input'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /><br />
        <input
          type="email"
          placeholder='Email'
          className='mt-3 input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder='Password'
          className='mt-3 input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button className="btn promo-button" type="submit">Create account</button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
      {success && <p className="text-success mt-2">{success}</p>}
          <Link to="/Login"><p className='fs-6 mt-4 plink'>Login</p></Link>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Signup;