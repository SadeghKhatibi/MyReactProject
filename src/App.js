import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Modal from './home/modal/modal';
import Abouttwo from './abouttwo/abouttwo';
// import Product from './product/product';
// import Mynav from './Mynav/Mynav';
// import Signup from './Signup/Signup';
// import Login from './login/login';
// import Viewall from './viewall/viewall';
// import Whosupport from './whosupport/whosupport';
// import Community from './community/community';
// import Wholesale from './wholesale/wholesale';
// import Collaborate from './letscollaborate/collaborate';
import Home from './home/home';
import Shopasli from './Shop/Shopasli';
import About from './About/about';
import Bookjohny from './bookjohny/bookjohny';
// import Card from './card/card';
// import Mynav from './Mynav/Mynav';
class App extends Component {
  render() { 
    return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopasli/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Flagshipstore" element={<Abouttwo/>}/>
          <Route path="/bookjohny" element={<Bookjohny/>}/>
        </Routes>
      </Router>
      {/* <Shopasli/> */}
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Bookjohny/> */}
      {/* <Collaborate/> */}
      {/* <Community/> */}
      {/* <Wholesale/> */}
      {/* <Whosupport/> */}
      {/* <Viewall/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Product/> */}
      {/* <Mynav/> */}
      {/* <Abouttwo/> */}
      {/* <Modal/> */}
    </React.Fragment>
    );
  }
}
 
export default App;
