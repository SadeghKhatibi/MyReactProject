import React, { useEffect, useState } from 'react';
import './product.css'
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/thumbnail-10collaborage.webp'
import img2 from '../image/gazcommunity.webp'
import img3 from '../image/khorshikohproduct.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button , Modal , Form} from 'react-bootstrap';
import Modal1 from '../home/modal/modal';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ProductContext from '../ProductContext/ProductContext';
function Product(){
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  const { products } = useContext(ProductContext);
  const similarProducts = product 
  ? products.filter(p => p.category === product.category && p.id !== product.id)
  : [];
  const testimonials = similarProducts.map((similarProduct) => ({
    image: similarProduct.images && similarProduct.images[0] ? URL.createObjectURL(similarProduct.images[0]) : null,
    hoverImage: similarProduct.images && similarProduct.images[1] ? URL.createObjectURL(similarProduct.images[1]) : null,
    texts: [
      similarProduct.productName,
      `€${similarProduct.price}`
    ]
  }));

  const { addToCart } = useContext(ProductContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const productimage = product?.images?.map((image, index) => ({
    image: URL.createObjectURL(image)
  }));

  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  // 
  const [isFixed, setIsFixed] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 0; 
      const maxScrollHeight = 340; 
      if (window.scrollY >= scrollHeight && window.scrollY < maxScrollHeight) {
        setIsFixed(true);
        setIsAbsolute(false);
      } else if (window.scrollY >= maxScrollHeight) {
        setIsFixed(false);
        setIsAbsolute(true);
      } else {
        setIsFixed(false);
        setIsAbsolute(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let className = 'col-md-6 ps-5';
  if (isFixed) {
    className += ' fixed';
  } else if (isAbsolute) {
    className += ' absolute';
  }
  // 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct({
      productName: product.productName,
      images: product.images,
      price: product.price,
      selectedSizes: product.selectedSizes,
      selectedColors: product.selectedColors || [],
    });
    setModalOpen(true);
    handleShow();
    setShow1(false);
    setShow(true);
    navigate('/Product', { state: { product } });
  };
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleQuickAddClick = (event, product) => {
    event.stopPropagation();
    setSelectedProduct({
      productName: product.productName,
      images: product.images,
      price: product.price,
      selectedSizes: product.selectedSizes,
      selectedColors: product.selectedColors || [],
    });
    setShow1(true);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color.');
      return;
    }
    const selectedProduct = {
      productName: product.productName,
      images: product.images,
      price: product.price,
      selectedSize,
      selectedColor,
      quantity: 1,
    };
    addToCart(selectedProduct);
    navigate('/Card');
  };
  const handleClose1 = () => {
    setModalOpen1(false);
    setShow1(false);
    setSelectedProduct(null);
  };
  return(
    <div>
      <Mynav/>
      <div className="container-fluid mt-5 px-5 pt-5">
        <div className="row">
        <div className="col-md-6 display2">
        <div className="row box1">
          <img src={URL.createObjectURL(product.images[0])} alt="" />
        </div>
        <div className="row mt-3">
          <div className="col-md-6 box2">
            <img src={URL.createObjectURL(product.images[1])} alt="" />
          </div>
          <div className="col-md-6 box2 ms-3">
            <img src={URL.createObjectURL(product.images[2])} alt="" />
          </div>
        </div>
        </div>
          {/*  */}
          <div className="testimonials-container display mt-4 pb-5 ms-3">
  <div className="testimonials" style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
    {productimage.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgbox ms-3">
          <img src={testimonial.image} alt="" className="img-fluid imgcart" />
          </div>
      </div>
    ))}
  </div>
</div>
          {/*  */}
          <div className='display2'>
          <div className={className}>
          <p className='fs-1 fw-bolder mt-5'>{product.productName}</p>
          <p>€{product.price}</p>
          <span className='spangray'>Size:</span>
          <br />
          {product.selectedSizes.map((size, index) => (
            <button 
              key={index} 
              className={`btnsize mt-2 ${selectedSize === size ? 'selected' : ''}`} 
              onClick={() => handleSizeSelect(size)}
            >{size}</button>
          ))}
          <br /><br />
          <span className='spangray mt-4'>Color:</span>
          <br />
          {product.selectedColors.map((color, index) => (
            <button 
              key={index} 
              className={`btnsize mt-2 mb-1 ms-2 ${selectedColor === color ? 'selected' : ''}`} 
              onClick={() => handleColorSelect(color)}
            >{color}</button>
          ))}
          <div className="row">
          <button className='mt-4 promo-button' onClick={handleAddToCart}>Add to cart</button>
          <p className='mt-4'>Sold out of your size? Click here to add yourself to the wishlist! </p><br />
<p>Limited timed, small batch t-shirt! Available in 3 colors - collect them all! </p><br />
<p>Printed on a 100% Cotton Hydro Blue T-shirt.</p>
          </div>
          </div>
          </div>
          <div className='display'>
          <p className='fs-1 fw-bolder mt-5'>{product.productName}</p>
          <p>€{product.price}</p>
          <span className='spangray'>Size</span>
          <br />
          {product.selectedSizes.map((size, index) => (
            <button 
              key={index} 
              className={`btnsize mt-2 ${selectedSize === size ? 'selected' : ''}`} 
              onClick={() => handleSizeSelect(size)}
            >{size}</button>
          ))}
          <br /><br />
          <span className='spangray mt-4'>Color:</span>
          <br />
          {product.selectedColors.map((color, index) => (
            <button 
              key={index} 
              className={`btnsize mt-2 mb-1 ms-2 ${selectedColor === color ? 'selected' : ''}`} 
              onClick={() => handleColorSelect(color)}
            >{color}</button>
          ))}
          <div className="row">
          <button className='mt-4 promo-button' onClick={handleAddToCart} >Add to cart</button>
          <p className='mt-4'>Sold out of your size? Click here to add yourself to the wishlist! </p><br />
<p>Limited timed, small batch t-shirt! Available in 3 colors - collect them all! </p><br />
<p>Printed on a 100% Cotton Hydro Blue T-shirt.</p>
          </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid boxdark mt-5">
        <div className='row pt-5'>
          <div className="col-md-4 text-center mt-5">
            <div className='boxgreen'>
            <svg role="presentation" fill="none" focusable="false" stroke-width="2" width="32" height="32" className="hidden sm:block icon icon-picto-gift" viewBox="0 0 24 24">
        <path d="M7.045 22.183c1.65.11 3.302.162 4.955.154a70.18 70.18 0 0 0 4.954-.156 4.44 4.44 0 0 0 4.097-4.099c.086-1.066.137-2.151.137-3.262 0-1.11-.051-2.194-.137-3.26a4.44 4.44 0 0 0-4.097-4.1A68.838 68.838 0 0 0 12 7.306c-1.848 0-3.482.051-4.955.157a4.44 4.44 0 0 0-4.097 4.097 40.693 40.693 0 0 0-.137 3.263c0 1.11.052 2.196.137 3.262a4.44 4.44 0 0 0 4.097 4.099ZM2.811 13.152h18.377ZM12 22.339V7.305Z" fill="currentColor" fill-opacity=".12"></path>
        <path d="M12 7.305a68.838 68.838 0 0 1 4.954.156 4.44 4.44 0 0 1 4.097 4.098c.086 1.067.137 2.152.137 3.261 0 1.11-.051 2.196-.137 3.262a4.44 4.44 0 0 1-4.097 4.1 70.18 70.18 0 0 1-4.954.155 68.867 68.867 0 0 1-4.955-.154 4.442 4.442 0 0 1-4.097-4.099 40.624 40.624 0 0 1-.137-3.262c0-1.11.052-2.195.137-3.263a4.44 4.44 0 0 1 4.097-4.097A69.102 69.102 0 0 1 12 7.305Zm0 0v15.034M2.81 13.152h18.377" stroke="currentColor"></path>
        <path d="m17.143 7.474 1.025-.497A2.73 2.73 0 0 0 19.4 3.235c-.999-1.872-3.672-1.961-4.793-.158L12 7.274 9.392 3.077C8.272 1.274 5.6 1.363 4.6 3.235A2.73 2.73 0 0 0 5.83 6.977l1.027.497" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
            </div>
            <p className='text-whit fw-bolder fs-5 mt-4 text-white'>SPEND MORE, GET MORE (FREE GIFTS!)</p>
            <p className='text-white'>The more you spend, the more FREE goodies you'll receive! Spend $130 and receive a free Mystery Greeting Card. Spend $200 and get a free mystery pair of socks (+ greeting card!) Spend $300 and get a free mystery art print (+ socks and greeting card!) Spend $400 and get a free mystery hat (+ art print, socks and greeting card!)</p>
          </div>
          <div className="col-md-4 text-center mt-5">
            <div className='boxgreen'>
            <svg role="presentation" fill="none" focusable="false" stroke-width="2" width="32" height="32" class="hidden sm:block icon icon-picto-happy" viewBox="0 0 24 24">
        <path d="M12 22.714a10.714 10.714 0 1 0 0-21.429 10.714 10.714 0 0 0 0 21.43v0Z" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6.56 13.647c.823 2.968 4.122 4.782 7.09 3.957 1.811-.66 3.296-2.143 3.79-3.957M16.368 9.528a.412.412 0 1 1 0-.825M16.368 9.528a.412.412 0 0 0 0-.825M7.632 9.528a.412.412 0 1 1 0-.825M7.632 9.528a.412.412 0 1 0 0-.825" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
            </div>
            <p className='text-whit fw-bolder fs-5 mt-4 text-white'>WHEN YOU BUY A TEE, WE PLANT A TREE</p>
            <p className='text-white'>We partnered with Trees For The Future (TREES), who trains communities on sustainable land use so that they can grow vibrant economies, thriving food systems, and a healthier planet.</p>
          </div>
          <div className="col-md-4 text-center mt-5">
            <div className='boxgreen'>
            <svg role="presentation" fill="none" focusable="false" stroke-width="2" width="32" height="32" class="hidden sm:block icon icon-picto-coupon" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.89 21.975c-1.325.974-3.176.9-4.391-.209a131.923 131.923 0 0 1-9.792-9.94 3.17 3.17 0 0 1-.753-1.5C1.56 8.293.727 3.222 1.976 1.972c1.25-1.25 6.32-.416 8.352-.022.56.111 1.078.371 1.502.752a131.922 131.922 0 0 1 9.94 9.792c1.109 1.214 1.18 3.067.209 4.392-.701.955-1.442 1.914-2.31 2.78-.865.865-1.823 1.607-2.778 2.308ZM9.458 6.523a2.073 2.073 0 1 1-2.93 2.931 2.073 2.073 0 0 1 2.93-2.931Z" fill="currentColor" fill-opacity=".12" stroke="currentColor"></path>
      </svg>
            </div>
            <p className='text-whit fw-bolder fs-5 mt-4 text-white'>EASY EXCHANGES</p>
            <p className='text-white'>45 days after delivery to return anything you’re unhappy with. Click here for Returns. *Exceptions on items marked as final sale.</p>
          </div>
        </div>
      </div>
      
      <div className="container mt-5 mb-5">
        <div className="row text-center">
          <p className='number'>26,906+</p>
          <p className='fw-bolder fs-3'>TREES FUNDED THROUGH OUR "BUY A TEE, PLANT A TREE" <br /> PARTNERSHIP WITH TREES FOR THE FUTURE</p>
          <p className='textpading'>We're not a green company but we're trying to do greenish things to offset our environmental impact, <br /> like planting a tree for every T-shirt sold in collaboration with Trees For The Future, partnering with our printer to fulfill our online orders to cut back on carbon emissions, and eliminating plastic packaging from 90% of our apparel</p>
        </div>
      </div>
  <div className="testimonials-container mt-4 pb-5 ms-3">
  <p className='fw-bolder fs-1 ms-4 ps-1 my-3 mb-5'>YOU MAY ALSO LIKE</p>
  <div className="testimonials" style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgbox ms-3" onClick={() => handleClick(similarProducts[index])}
            style={{ cursor: 'pointer' }}>
          <img src={testimonial.image} alt="" className="img-fluid imgcart" />
          <img src={testimonial.hoverImage} alt="" className="hover-image"/>
          <Button className='button' variant="" 
          onClick={(e) => handleQuickAddClick(e, similarProducts[index])}>+ Quick add</Button>
          </div>
        <div className="text-center1">
        {testimonial.texts.map((text, i) => (
                <p key={i} className={`highlited${i}`}>{text}</p>
              ))}
        </div>
      </div>
    ))}
  </div>
  <div className="controls text-center ms-5 ps-4">
    <button onClick={handlePrev} disabled={currentIndex === 0}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button onClick={handleNext} disabled={currentIndex >= testimonials.length - 3}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
</div>
  <div className="progress-bar-container">
    <div className="progress-bar" style={{ width: `${((currentIndex + 3) / testimonials.length) * 100}%` }}></div>
  </div>
      {/*  */}
      <div className="col-12 text-center pb-3 mt-5">
                  <img src={img2} id='image'/>
                  <div className="overlay mt-5 pt-5">
                  <button className="btn video-play-button rounded-circle p-0" type="button">
      <div className="circle-background"></div>
      <svg role="presentation" fill="none" focusable="false" width="80" height="80" className="icon icon-play-button" viewBox="0 0 48 48">
        <path fillRule="evenodd" clipRule="evenodd" d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24Zm-3-19.15a.3.3 0 0 0 .462.253l7.545-4.85a.3.3 0 0 0 0-.505l-7.545-4.85a.3.3 0 0 0-.462.252v9.7Z" fill="#fff"></path>
      </svg>
    </button>
                      <h1 className="fonte1 pt-4">Take a quick tour of the new <br /> bakery  on newbury street in <br /> boston, MA</h1>
                  </div>
                  </div>
                  {/*  */}
        <div className="container mt-5 mb-5 pb-3">
          <div className="row">
            <img src={img3} alt="" className='khorshi'/>
          </div>
        </div>
        {/*  */}
        <div className="container-fluid div-purple py-5 text-center">
            <div className='row marquee-content1 justify-content-center align-items-center mb-5 pb-5 row-last'>
                <p className="align-items-center marquee-text1 johnylast">WORLD'S FIRST T-SHIRT BAKERY</p>
            </div>
    </div>
    {/*  */}
    <Modal show={show1} onHide={handleClose1}>
    <div class="modal-header"><div class="modal-title h4">Quick add</div><button type="button" class="btn-close" aria-label="Close" onClick={handleClose1}></button></div>
        <Modal.Body>
        {selectedProduct && <Modal1 isOpen={show1} onClose={handleClose1} product={selectedProduct} />}
        </Modal.Body>
      </Modal>
      <div>
      <Modal1
        isOpen={show1}
        onClose={handleClose1}
        product={selectedProduct}
        onAddToCart={(product) => {
          console.log('Product added to cart:', product);
        }}
      />
    </div>
    {/*  */}
      <Footer/>
    </div>
  );
}
export default Product;