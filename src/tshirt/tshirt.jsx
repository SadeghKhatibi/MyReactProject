import React, { useState , useContext , useEffect } from 'react';
import Mynav from "../Mynav/Mynav";
import Footer from "../footer/footer";
import ProductContext from "../ProductContext/ProductContext";
import { useNavigate } from "react-router-dom";
import { Button , Modal , Form} from 'react-bootstrap';
import Modal1 from "../home/modal/modal";
import img1 from'../image/gaz.webp';
import './tshirt.css'
const Tshirt = () =>{
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const tshrtProducts = products.filter(product => product.category === 'tshirt');
  const testimonials = tshrtProducts.map((product) => ({
    image: product.images[0] ? URL.createObjectURL(product.images[0]) : null,
    hoverImage: product.images[1] ? URL.createObjectURL(product.images[1]) : null,
    texts: [
      product.productName,
      `€${product.price}`,
    ],
  }));
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClick = (product) => {
    setSelectedProduct({
      productName: product.productName,
      images: product.images,
      price: product.price,
      selectedSizes: product.selectedSizes,
      selectedColors: product.selectedColors || [],
    });
    setShow1(true);
    navigate('/Product', { state: { product, category: 'about' } });
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
  const handleClose = () => {
    setModalOpen1(false);
    setShow1(false);
    setSelectedProduct(null);
  };
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  useEffect(() => {
    setShow2(true); // نمایش Popup به محض لود شدن سایت
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
      <div class="container-fluid container-fluid1 mt-5 pt-1">
            <div className="testimonials-containerabout mt-4 pb-5 ms-3">
  <div className="testimonialsabout">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgboxabout" onClick={() => handleClick(tshrtProducts[index])}
            style={{ cursor: 'pointer' }}>
          <img src={testimonial.image} alt="" className="img-fluid imgcartabout" />
          <img src={testimonial.hoverImage} alt="" className="hover-image"/>
          <Button className='buttonshopasli' variant="" 
              onClick={(e) => handleQuickAddClick(e, tshrtProducts[index])}
>+ Quick add</Button></div>
        <div className="text-center1about">
          {testimonial.texts.map((text, i) => (
            <p key={i} className={`highlited${i}`}>{text}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    <Modal show={show2} onHide={handleClose2}>
      <Modal.Body><div class="farsi-text">
      در این قسمت از پروژه، با کلیک روی هر محصول، شما به صفحه اختصاصی آن محصول (صفحه Product) هدایت می‌شوید. در این صفحه، جزئیات کاملی از محصول نمایش داده می‌شود. <br />

ویژگی "You May Also Like": <br />
یکی از قابلیت‌های مهم این صفحه، بخش "You May Also Like" است. در این بخش، محصولات مشابهی که با محصول فعلی مطابقت دارند، نمایش داده می‌شوند. به عنوان مثال: <br />

اگر در حال مشاهده یک تیشرت (T-shirt) هستید، تمامی محصولات مشابه، مانند دیگر تیشرت‌های موجود در سایت، در این بخش قابل مشاهده خواهند بود. <br />
این ویژگی به کاربران کمک می‌کند تا محصولات مرتبط و مشابه را راحت‌تر پیدا کرده و خریدهای خود را به شکل بهینه‌تری انجام دهند.
</div></Modal.Body>
    </Modal>
    <Modal show={show1} onHide={handleClose}>
    <div class="modal-header"><div class="modal-title h4">Quick add</div><button type="button" class="btn-close btnabout" aria-label="Close" onClick={handleClose1}></button></div>
        <Modal.Body>
        {selectedProduct && <Modal1 isOpen={show1} onClose={handleClose} product={selectedProduct} />}
        </Modal.Body>
      </Modal>
      <Footer/>
    </div>
  )
}
export default Tshirt;