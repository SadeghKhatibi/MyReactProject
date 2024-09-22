import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProductProvider } from './ProductContext/ProductContext';
import { AuthProvider } from './AuthContext';
import Abouttwo from './abouttwo/abouttwo';
import Product from './product/product';
import Signup from './Signup/Signup';
import Panel from './panel/panel';
import Login from './login/login';
import Whosupport from './whosupport/whosupport';
import Community from './community/community';
import Wholesale from './wholesale/wholesale';
import Collaborate from './letscollaborate/collaborate';
import Home from './home/home';
import Shopasli from './Shop/Shopasli';
import About from './About/about';
import Bookjohny from './bookjohny/bookjohny';
import Card from './card/card';
import Modal1 from './home/modal/modal';
import UserOrders from './user/user';
import UserAddresses from './user/UserAddresses';
import ProtectedRoute from './ProtectedRoute';
import Error404 from './Erroro404/Error404';
import Tshirt from './tshirt/tshirt';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', 
    };
  }

  setIsLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn });
    localStorage.setItem('isLoggedIn', isLoggedIn); 
  };

  render() { 
    const { isLoggedIn } = this.state;
    return (
    <React.Fragment>
      <AuthProvider>
      <ProductProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shopasli/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Tshirt" element={<Tshirt/>}/>
          <Route path="/Flagshipstore" element={<Abouttwo/>}/>
          <Route path="/bookjohny" element={<Bookjohny/>}/>
          <Route path="/Collaborate" element={<Collaborate/>}/>
          <Route path="/Community" element={<Community/>}/>
          <Route path="/Wholesale" element={<Wholesale/>}/>
          <Route path="/support" element={<Whosupport/>}/>
          <Route path="/Card" element={<Card/>}/>
          <Route path="/Login" element={<Login setIsLoggedIn={this.setIsLoggedIn} />} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Modal1" element={<Modal1/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route
              path="/panel"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Panel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/User"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <UserOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/UserAddresses"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <UserAddresses />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      </ProductProvider>
      </AuthProvider>
    </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
 
export default connect(mapStateToProps)(App);
