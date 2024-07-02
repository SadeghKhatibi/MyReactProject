import React, { useState } from 'react';
import Footer from '../footer/footer';
import Mynav from '../Mynav/Mynav';
import img1 from'../image/gaz.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import img2 from'../image/kolah1.webp'
import img3 from'../image/kolah2.webp'
import img4 from '../image/kolah3.webp'
import img5 from'../image/kolah4.webp'
import img6 from'../image/kolah5.webp'
import img7 from '../image/kolah6.webp'
import img8 from '../image/kolah7.webp'
import img9 from '../image/kolah8.webp'
import './Shopasli.css'
import { Button , Modal , Form} from 'react-bootstrap';
import Modal1 from '../home/modal/modal';
const testimonials = [
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
];
function Shopasli() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isModalOpen, setModalOpen] = useState(false);
  // 
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [isModalOpen1, setModalOpen1] = useState(false);

  const product = {
    name: "World's Softest Embroidered Mini Crossbones Zip (Hot Pink)",
    image: img1, // مسیر صحیح تصویر را اینجا قرار دهید
    price: '€92,95',
    sizes: ['Adult / Small', 'Adult / Medium', 'Adult / Large', 'Adult / XL', 'Adult / 2XL', 'Adult / 3XL'],
    color: 'Pink'
  };
  const handleClick = () => {
    setModalOpen1(true);
    handleShow1();
  };
  return(
    <div>
      <Mynav/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 my-5 pt-4'>
            <img src={img1} alt="" className='img-fluid promo-imageshop'/>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-1">
      <div className="d-flex justify-content-between align-items-center mb-3">    
      <div className="App">
        {/* Button to Open the Modal */}
        <Button variant="" onClick={handleShow}>
        <h2 className="favorites-headingshop"><FontAwesomeIcon icon={faFilter}/>   FILTERS</h2>
        </Button>
        {/* The Modal */}
        <Modal show={show} onHide={handleClose} className='divapp'>
          <Modal.Header closeButton>
            <Modal.Title>Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="sort">
                <Form.Label>Sort by</Form.Label>
                <div>
                  <Form.Check type="checkbox" id="bestSelling" label="Best selling" />
                  <Form.Check type="checkbox" id="priceLowToHigh" label="Price, low to high" />
                  <Form.Check type="checkbox" id="priceHighToLow" label="Price, high to low" />
                  <Form.Check type="checkbox" id="dateOldToNew" label="Date, old to new" />
                  <Form.Check type="checkbox" id="dateNewToOld" label="Date, new to old" />
                </div>
              </Form.Group>
             <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control as="select">
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Green</option>
                </Form.Control>
              </Form.Group>
              <Button variant="success" onClick={handleClose}>
                Apply (1)
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
                  {/* <li class="nav-item dropdown"> */}
                  <a href="#" className="view-all-link mt-1 nav-link" data-bs-toggle="dropdown" role="button" aria-expanded="false"><span className='fw-bold'>Sort by:</span>VIEW ALL<button className="btn-circleshop"><FontAwesomeIcon icon={faChevronDown}/></button></a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item a-dropdown">Best selling</a></li>
          <li><a class="dropdown-item a-dropdown">Price, low to high</a></li>
          <li><a class="dropdown-item a-dropdown">Price, high to low</a></li>
          <li><a class="dropdown-item a-dropdown">Date, old to new</a></li>
          <li><a class="dropdown-item a-dropdown">Date, new to old</a></li>
        </ul>
      {/* </li> */}
              </div>
              </div>
      <div class="container-fluid mt-5 pt-1">
            <div className="testimonials-containershop mt-4 pb-5 ms-3">
  <div className="testimonialsshop">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgboxshop">
          <img src={testimonial.image} alt="" className="img-fluid imgcart" />
          <img src={testimonial.hoverImage} alt="" className="hover-image"/>
          <Button className='button' variant="" onClick={handleClick}>+ Quick add</Button>
          </div>
        <div className="text-centershop">
          {testimonial.texts.map((text, i) => (
            <p key={i} className={`highlited${i}`}>{text}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    <Modal show={show1} onHide={handleClose1}>
    <div class="modal-header"><div class="modal-title h4">Quick add</div><button type="button" class="btn-close" aria-label="Close" onClick={handleClose1}></button></div>
        <Modal.Body>
            <Modal1 isOpen={isModalOpen1} onClose={() => setModalOpen1(false)} product={product} />
        </Modal.Body>
      </Modal>
      <Footer/>
    </div>
  )
}
export default Shopasli;