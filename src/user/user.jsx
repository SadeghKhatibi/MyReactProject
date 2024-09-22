import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserOrders.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logout1 } from '../authSlice';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/download.jpeg'

const UserOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelclick = () =>{
    navigate('/UserAddresses')
  }
  const handellogout = () =>{
    dispatch(Logout1());
    navigate('/Signup')
  }
  return (
    <div>
      <Mynav/>
    <div className="user-orders-container text-center">
      <nav className="navbar navbaruser navbar-light bg-light justify-content-between ">
        <a className="navbar-brand navbaruser-brand">Orders</a>
        <div className="d-flex">
          <a className="nav-link nav-linkuser active" href="#">Orders</a>
          <span> / </span>
          <a className="nav-link nav-linkuser" onClick={handelclick} href="#">Addresses</a>
        </div>
        <a className="nav-link nav-linkuser" onClick={handellogout} href="#">Logout</a>
      </nav>
      <div className="content-container">
        <div className="empty-orders mt-5">
          <img src={img1} alt="No Orders" className="mb-3" /> {/* Use your box icon */}
          <h5>You haven't placed any orders yet.</h5>
          <Link to="/shop">
            <button type="button" className="btn btn-success1 mt-3">Continue shopping</button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserOrders;