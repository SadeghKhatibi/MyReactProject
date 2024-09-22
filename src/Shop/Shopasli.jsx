import React, { useState , useContext , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import ProductContext from '../ProductContext/ProductContext';
import { useAuth } from '../AuthContext';
function Shopasli() {
  const navigate = useNavigate();
  const { products , setProducts } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const { user } = useAuth(); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShow1 = () => setShow1(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [filters, setFilters] = useState({
    color: '',
    sortBy: '',
  });
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  const handleFilterChange1 = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
    const sortOptions = {
      priceLowToHigh: 'Price, low to high',
      priceHighToLow: 'Price, high to low',
      dateOldToNew: 'Date, old to new',
      dateNewToOld: 'Date, new to old',
    };
    setSelectedSort(sortOptions[value]);
  };
  const [selectedSort, setSelectedSort] = useState('SORT ALL');
  const [editedProduct, setEditedProduct] = useState({
    productName: '',
    price: ''
  });
  const applyFilters = (products) => {
    let filteredProducts = [...products];

    if (filters.color) {
      filteredProducts = filteredProducts.filter(product => 
        product.selectedColors.includes(filters.color)
      );
    }

    switch (filters.sortBy) {
      case 'priceLowToHigh':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'dateOldToNew':
        filteredProducts.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        break;
      case 'dateNewToOld':
        filteredProducts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
      default:
        break;
    }
    return filteredProducts;
  };
  const shopProducts = applyFilters(products.filter(product => product.category === 'shop'));
  const testimonials = shopProducts.map((product) => ({
    image: product.images[0] ? URL.createObjectURL(product.images[0]) : null,
    hoverImage: product.images[1] ? URL.createObjectURL(product.images[1]) : null,
    texts: [
      product.productName,
      `€${product.price}`,
    ],
  }));
  const handleClick = (product) => {
    setSelectedProduct({
      productName: product.productName,
      images: product.images,
      price: product.price,
      selectedSizes: product.selectedSizes,
      selectedColors: product.selectedColors || [],
    });
    setShow1(true);
    navigate('/Product', { state: { product } });
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
  const handleClose1 = () => {
    setModalOpen1(false);
    setShow1(false);
    setSelectedProduct(null);
  };
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct({
      productName: product.productName,
      price: product.price
    });
    setShow2(true);
  };

  const handleDeleteClick = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };
  const handleModalClose = () => {
    setShow2(false);
    setEditedProduct({
      productName: '',
      price: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    const updatedProducts = products.map(product =>
      product.id === selectedProduct.id
        ? { ...product, productName: editedProduct.productName, price: editedProduct.price }
        : product
    );
    setProducts(updatedProducts);
    handleModalClose();
  };
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  useEffect(() => {
    setShow3(true); // نمایش Popup به محض لود شدن سایت
  }, []);
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
                <Form.Check 
                  type="radio" 
                  name="sortBy" 
                  value="priceLowToHigh" 
                  label="Price, low to high" 
                  onChange={handleFilterChange}
                />
                <Form.Check 
                  type="radio" 
                  name="sortBy" 
                  value="priceHighToLow" 
                  label="Price, high to low" 
                  onChange={handleFilterChange}
                />
                <Form.Check 
                  type="radio" 
                  name="sortBy" 
                  value="dateOldToNew" 
                  label="Date, old to new" 
                  onChange={handleFilterChange}
                />
                <Form.Check 
                  type="radio" 
                  name="sortBy" 
                  value="dateNewToOld" 
                  label="Date, new to old" 
                  onChange={handleFilterChange}
                />
                </div>
              </Form.Group>
             <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control 
                as="select" 
                name="color" 
                value={filters.color} 
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </Form.Control>
              </Form.Group>
              <Button onClick={handleClose} className="ms-4 mt-3 always-visible">
                Apply Filters
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
                  {/* <li class="nav-item dropdown"> */}
                  <a href="#" className="view-all-link mt-1 nav-link" data-bs-toggle="dropdown" role="button" aria-expanded="false"><span className='fw-bold'>Sort by:</span><span></span>{selectedSort}<button className="btn-circleshop ms-5"><FontAwesomeIcon icon={faChevronDown}/></button></a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item a-dropdown" onClick={() => handleFilterChange1('sortBy', 'priceLowToHigh')}>Price, low to high</a></li>
          <li><a class="dropdown-item a-dropdown" onClick={() => handleFilterChange1('sortBy', 'priceHighToLow')}>Price, high to low</a></li>
          <li><a class="dropdown-item a-dropdown" onClick={() => handleFilterChange1('sortBy', 'dateOldToNew')}>Date, old to new</a></li>
          <li><a class="dropdown-item a-dropdown" onClick={() => handleFilterChange1('sortBy', 'dateNewToOld')}>Date, new to old</a></li>
        </ul>
      {/* </li> */}
              </div>
              </div>
      <div class="container-fluid mt-5 pt-1">
            <div className="testimonials-containershop mt-4 pb-5 ms-3">
  <div className="testimonialsshop">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgboxshop" onClick={() => handleClick(shopProducts[index])}
            style={{ cursor: 'pointer' }}>
          <img src={testimonial.image} alt="" className="img-fluid imgcart" />
          <img src={testimonial.hoverImage} alt="" className="hover-image"/>
          {/* {shopProducts.map((product) => ( */}
          <Button className='buttonshopasli' variant="" 
              onClick={(e) => handleQuickAddClick(e, shopProducts[index])}
>+ Quick add</Button>
         {/* ))} */}
          </div>
        <div className="text-centershop">
          {testimonial.texts.map((text, i) => (
            <p key={i} className={`highlited${i}`}>{text}</p>
          ))}
          {user && user.email === 'ssadeghkhatibi@gmail.com' && (
            <>
            <Button className='btn buttonEdit mb-2' variant="" onClick={() => handleEditClick(shopProducts[index])}>ویرایش</Button>
            <Button className='btn buttonEdit1' variant="" onClick={() => handleDeleteClick(shopProducts[index].id)}>حذف</Button>
            </>
          )}
        </div>
      </div>
    ))}
    <Modal show={show2} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>ویرایش محصول</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>نام محصول</Form.Label>
              <Form.Control
              className='w-50'
                type="text"
                name="productName"
                value={editedProduct.productName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>قیمت محصول</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='buttonEdit1' variant="" onClick={handleModalClose}>
            بستن
          </Button>
          <Button className='buttonEdit' variant="" onClick={handleSaveChanges}>
            ذخیره تغییرات
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
</div>
<Modal show={show3} onHide={handleClose3}>
      <Modal.Body><div class="farsi-text">
      در این بخش از پروژه، هر محصولی که در سایت موجود است، قابلیت حذف یا ویرایش دارد. این دو قابلیت به مدیر سایت امکان می‌دهند تا محصولات را به‌راحتی مدیریت کند. <br />

ویژگی‌های اصلی: <br />
1-حذف محصول: <br />
مدیر سایت می‌تواند هر محصولی را به صورت کامل از سایت حذف کند. <br />

2-ویرایش محصول: <br />
مدیر قادر است جزئیات هر محصول مانند نام، قیمت، رنگ‌بندی و دیگر اطلاعات را به‌روزرسانی یا ویرایش کند. <br />

3-دکمه‌های اختصاصی مدیر: <br />
دکمه‌های حذف و ویرایش فقط برای مدیر سایت قابل مشاهده هستند و کاربران عادی به آن‌ها دسترسی ندارند. <hr />
در پایان، از توجه و نگاه گرم شما سپاسگزارم. <br />
این پروژه نتیجه تمام توان و تلاشی است که در طول این مدت به کار گرفتم و امیدوارم که تلاش‌هایم در این پروژه مورد توجه شما قرار گرفته باشد. هر آنچه در توان داشتم، برای ساخت این پروژه صرف کردم. <br />

مرسی که وقت گذاشتید و پروژه من رو بررسی کردید.
</div></Modal.Body>
    </Modal>
    </div>
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
      <Footer/>
    </div>
  )
}
export default Shopasli;