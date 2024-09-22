import React, { useState } from 'react';
import './wholesale.css'
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img16 from '../image/johnywholesale.jpeg'
import img17 from '../image/johny2wholesale.jpeg'
import img18 from '../image/johny3wholesale.jpeg'
import img19 from '../image/johny4wholesale.jpeg'
import img20 from '../image/johny5wholesale.jpeg'
import img21 from '../image/johny6wholesale.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Wholesale = ()=>{
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');

  const pages = [
    [img16, img17],
    [img18, img19],
    [ img20, img21 ],
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 1000); 
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 1000); 
    }
  };
  return(
    <div>
      <Mynav/>
    <div>
      <div className="container-fluid py-5 mt-5 text-center">
        <div className='row justify-content-center align-items-center mb-5 pb-5 row-last'>
          <p className="align-items-center johnylastwholesale">150+ WHOLESALE GREETING CARDS</p>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="row">
          <div className="col-md-12 ps-4">
            <div className="container">
              <div className="row">
              <div className="col-6 ps-4">
                  <p className='fw-bolder fs-3 fst-italic'>Faire x Johnny Cupcakes</p>
                  <p className='fw-bolder fs-1'>WE’VE PARTNERED WITH FAIRE TO SELL OUR WHOLESALE PRODUCTS ONLINE. JOIN TODAY AND GET $100 OFF AND 1 YEAR OF FREE SHIPPING, COVERED BY FAIRE.*</p>                
                </div>
                <div className="col-6 ps-4">
                
                </div>
              </div>
              <div className="row mb-5">
                <div class="col-4">
                  <p className='fw-bolder fs-3'>$100 OFF & 1 YEAR OF FREE SHIPPING</p>
                  <p>Faire is offering this promotion to new retailers to grow its global community of retailers and brands. Learn More</p>
                </div>
                <div class="col-4">
                  <p className='fw-bolder fs-3'>NET60 TERMS ON ALL ORDERS</p>
                  <p>When you order through Faire, use terms to buy now & pay 60 days later.</p>
                </div>
                <div class="col-4">
                  <p className='fw-bolder fs-3'>FREE RETURNS ON OPENING ORDERS</p>
                  <p>If something's not right, get a prepaid shipping label and send it back.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='container mt-5'>
          <div className="row">
            <div className="col-md-6 text-center">
              <p className='pgreen'>NO MINIMUM!</p>
            </div>
            <div className="col-md-6 text-center">
              <p className='pgreen'>SHIPS IN 1-3 DAYS!</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='container mt-5'>
          <div className="row">
            <div className="col-md-4 text-center">
            </div>
            <div className="col-md-4 text-center">
            </div>
            <div className="col-md-4 text-center d-flex flex-column align-items-center justify-content-center promo-textwholesale">
            <h1 className="promo-headingwholesale mx-5 mt-5 text-center">THANK YOU FOR YOUR INTEREST IN WHOLESALE!</h1>
              <p className="promo-details promo-detailshome mx-5 mb-5 text-center">We would love for you to carry our products in your shop. For an updated copy of our catalog and more information on becoming a Johnny Cupcakes Stockist, fill out the form below. We'll follow up with the details needed to place your first order!</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="book-containerwholesale my-5">
      <div className={`book ${isFlipping ? 'flipping' : ''} ${flipDirection}`}>
        <div className="page left">
          <img src={pages[currentPage][0]} alt="Page Left" />
        </div>
        <div className="page right">
          <img src={pages[currentPage][1]} alt="Page Right" />
        </div>
        {currentPage < pages.length - 1 && (
          <div className="page next-right">
            <img src={pages[currentPage + 1][1]} alt="Next Page Right" />
          </div>
        )}
        {currentPage > 0 && (
          <div className="page prev-left">
            <img src={pages[currentPage - 1][0]} alt="Previous Page Left" />
          </div>
        )}
      </div>
      <button className="prev-button" onClick={handlePreviousPage}>&#9664;</button>
      <button className="next-button" onClick={handleNextPage}>&#9654;</button>
    </div>
    {/*  */}
    <div className="container my-3 py-3">
    <h2 className="featured-heading mt-5 pb-2">TESTIMONIALS</h2>
    <div className="row">
        {/* <!-- Card 1 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Johanna • Middletown, CT, United States</h5>
                    <p className="card-text mx-3">+Amazing, high quality products. Sold out very quickly in my coffee shops. Very fast shipping too!</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Molly • Wayzata, MN, United States</h5>
                    <p className="card-text mx-3">We love these cards and so do my customers. They're just something a little different than other stationery greeting card lines which is so great!</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Mina • Providence, RI, United States</h5>
                    <p className="card-text mx-3">Great quality and clever packaging! Loved the personalized note included in the order!</p>
                </div>
            </div>
        </div>
    </div>
</div>
{/*  */}
<div className="container">
    <div className="row">
        {/* <!-- Card 1 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Robin • Rochester, NY, United States</h5>
                    <p className="card-text mx-3">The product is fun, clever and graphically distinctive.  Always great to work with a passionate entrepreneur. The product shipped promptly and we are very happy with having this fun new cardline.</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Amber • Raleigh, NC, United States</h5>
                    <p className="card-text mx-3">JC is a brand we've known & loved for many years and we're super excited to carry Johnny Cupcakes in our shop! Our order showed up so fast, and in the most amazing packaging filled with sweet little surprises. Not surprising that the cards and pins we ordered started selling immediately. We will definitely reorder & look forward to it!</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Lisa • Memphis, TN, United States</h5>
                    <p className="card-text mx-3">This is such a fun line, and really rounds out our greeting card selection. We're excited to have them in store!</p>
                </div>
            </div>
        </div>
    </div>
</div>
{/*  */}
<div className="container my-3 py-3">
    <div className="row">
        {/* <!-- Card 1 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Gail • Oak Park Township, IL, United States</h5>
                    <p className="card-text mx-3">Fresh New Funk!  We like to keep it coming at our store and love the graphics for these Fun new items in our mix. Will certainly get some more.</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Kiley • Golden, CO, United States</h5>
                    <p className="card-text mx-3">Highly Recommended!  We are long-time Johnny Cupcake fans and rushed to stock our shelves and introduce the brand to our customers! Excellent experience all around and fun to see faces light up when they take in the art. :)</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5 className="card-title mt-4 mx-3">Kiley • North Providence, RI, United States</h5>
                    <p className="card-text mx-3">Johnny Cupcakes Rocks! <br />From the insane packaging it came in, which we saved! Every product was amazing quality adn our customers love them!</p>
                </div>
            </div>
        </div>
    </div>
</div>
{/*  */}
<div className='container my-5 py-5'>
      <div className="row align-items-center">
        <div className='col-md-6 pe-5'>
          <p className='fs-3'>Get Started today!</p>
          <p className='lasttext'>LET US KNOW ABOUT YOUR SPECIFIC WHOLESALE NEEDS!</p>
          <p>Tap HERE to shop on our FAIRE wholesale page, or contact us directly, below:</p>
        </div>
        <div className="col-md-6 ps-5">
          <div className='container'>
            <div className='row'>
              <div className="col-md-6">
    <input type="text" class="form-control is-valid" id="validationServer01" placeholder='Name' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
              </div>
              <div className="col-md-6">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="---@gmail.com"/>
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please choose a username.
              </div>
              </div>
            </div>
            <div className='row'>
            <div className="col-12">
            <textarea class="form-control" id="validationTextarea" placeholder="Message" required rows={4}></textarea>
            <div class="invalid-feedback">
              Message
            </div>
            </div>
            </div>
            <div className='row'>
            <div class="mt-1">
    <button class="btn promo-button" type="submit">Submit form</button>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
export default Wholesale;