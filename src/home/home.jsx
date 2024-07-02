import React, { useState  , useEffect } from 'react';
import './homecss.css'
import img from'../image/image.webp'
import img1 from '../image/thumbnail-10collaborage.webp'
import img2 from'../image/classic_laundry_web.webp'
import img3 from '../image/Screen_Shot_2022-10-14_at_10.05.45_PM.webp'
import img4 from '../image/Screen_Shot_2022-10-14_at_10.05.54_PM.avif'
import img5 from '../image/Screen_Shot_2022-10-14_at_10.06.03_PM.webp'
import img6 from '../image/Screen_Shot_2022-10-14_at_10.06.11_PM.webp'
import img7 from '../image/Screen_Shot_2022-10-14_at_10.06.23_PM.avif'
import img8 from '../image/Screen_Shot_2022-10-14_at_10.06.29_PM.webp'
import img9 from '../image/camp_600x_37aed8eb-34e8-41ad-aefa-3bdcb51627e5.webp'
import img10 from '../image/pile_d8772b3d-22a5-4c70-9365-c530aea17d94_600x-1.webp'
import img11 from '../image/tat_600x_7f49eb98-9979-44c2-b10c-aba000ab4fee.webp'
import img12 from '../image/02.webp'
import img13 from '../image/Screen_Shot_2022-10-22_at_3.39.15_PM.webp'
import img14 from '../image/BlackSprinklesweb_87f8cc65-9aa3-443a-b6bc-4c51a46a600f.webp'
import img15 from '../image/ZipUp2copy.webp'
import img16 from '../image/JC-Week1-95_copy.webp'
import img17 from '../image/classic_crossbones-guys-01_225e2361-4dd6-4304-9363-6f3a26d72ebd.webp'
import img18 from '../image/Johnny_Cupcakes_22-Oct-2022-144519.webp'
import img19 from '../image/tiger_hoody-2_4788f162-ba5d-40cb-8b67-d085abb6f403.webp'
import img20 from '../image/JC-Cat-Classics-59_copy.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight , faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import { Button , Modal , Form} from 'react-bootstrap';
import Modal1 from './modal/modal';
const testimonials = [
    {
      image : img14 ,
      hoverImage: img17,
      texts: [
        'STICKERMA',
        '€4,95',
      ]
    },
    {
      image : img15 ,
      hoverImage: img17,
      texts: [
        'STICKERMA',
        '€4,95',
      ]
    },
    {
      image : img16 ,
      hoverImage: img17,
      texts: [
        'STICKERMA',
        '€4,95',
      ]
    },
    {
      image : img17 ,
      hoverImage: img16,
      texts: [
        'STICKERMA',
        '€4,95',
      ]
    },
    {
      image : img1 ,
      hoverImage: img16,
      texts: [
        'STICKERMA',
        '€4,95',
      ]
    },
    {
      image : img1 ,
      hoverImage: img16,
      texts: [
        'STICKERMA',
        '€4,95',
      ]
    },
  ];
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
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
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const product = {
    name: "World's Softest Embroidered Mini Crossbones Zip (Hot Pink)",
    image: img1, // 
    price: '€92,95',
    sizes: ['Adult / Small', 'Adult / Medium', 'Adult / Large', 'Adult / XL', 'Adult / 2XL', 'Adult / 3XL'],
    color: 'Pink'
  };
  const handleClick = () => {
    setModalOpen(true);
    handleShow();
  };
  // message
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000); // 

    return () => clearTimeout(timer); // 
  }, []);

  const handleClos = () => {
    setShowMessage(false);
  };
    return (
      <div className='kolsite'>
        <Mynav/>
        <div>
      {showMessage && (
        <div className='messageBox'>
          <button onClick={handleClos} className='closeButton'>×</button>
          <p>سلام من صادق خطیبی و این پروژه React من هستش این پروژه یک پروژه کامل فروشگاهی هستش و ۱۷ تا component داره من تمامیه component هارو طراحی و Responsive کردم و فقط link کردن component ها و ارتباط بین اونها مونده چون من امتحان داشتم کم وقت گذاشتم و نتونستم کامل تموم کنم وگرنه پروژه از دید بصری کامل هستش ممنون از اینکه وقت گذاشتین و پیام من رو خوندین</p>
        </div>
      )}
    </div>
         {/* <div className="container-fluid"> */}
                  <div className="col-12 text-center">
                  <img src={img} id='image'/>
                  <div className="overlay">
  <button className="btn video-play-button rounded-circle p-0" type="button">
      <div className="circle-background"></div>
      <svg role="presentation" fill="none" focusable="false" width="80" height="80" className="icon icon-play-button" viewBox="0 0 48 48">
        <path fillRule="evenodd" clipRule="evenodd" d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24Zm-3-19.15a.3.3 0 0 0 .462.253l7.545-4.85a.3.3 0 0 0 0-.505l-7.545-4.85a.3.3 0 0 0-.462.252v9.7Z" fill="#fff"></path>
      </svg>
    </button>
                     <p className="quote fw-bold">"Top Innovator in Retail" - The Boston Globe</p>
                      <h1 className="fonte1">WORLD'S FIRST T-SHIRT<br/> BAKERY</h1>
                      <p className="lead fs-4 ">332 Newbury Street · Boston, Massachusetts</p>
                  </div>
                  </div>
          {/* </div> */}
          <div className="container promotion-container pt-5">
            <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center promo-text">
                    <h1 className="promo-heading">FUN ONLINE SHOPPING</h1>
                    <a><p className="promo-click"> — CLICK HERE —</p></a>
                    <p className="promo-details promo-detailshome">Free exchanges up to 45 days</p>
                    <p className="promo-details promo-detailshome">Free gifts on orders $130+</p>
                    <p className="promo-details promo-detailshome">Buy a tee & we plant a tree</p>
                    <button className="btn promo-button p-3 px-4">SHOP NOW</button>
                </div>
                <div className="col-md-6 col-md-6x axyaro">
                    <img src={img2} alt="Promotion" className="img-fluid promo-image" />
                </div>
            </div>
        </div>
        <div className="container text-center my-5 py-5">
            <h2 className="featured-heading">FEATURED IN</h2>
            <div className="row justify-content-center my-5 py-3">
                <div className="col-4 col-md-2">
                    <img src={img3} alt="Wired" className="img-fluid featured-logo" />
                </div>
                <div className="col-4 col-md-2">
                    <img src={img4} alt="TEDx" className="img-fluid featured-logo" />
                </div>
                <div className="col-4 col-md-2">
                    <img src={img5} alt="WWD" className="img-fluid featured-logo" />
                </div>
                <div className="col-4 col-md-2">
                    <img src={img6} alt="NPR" className="img-fluid featured-logo" />
                </div>
                <div className="col-4 col-md-2">
                    <img src={img7} alt="Inc." className="img-fluid featured-logo" />
                </div>
                <div className="col-4 col-md-2">
                    <img src={img8} alt="Forbes" className="img-fluid featured-logo" />
                </div>
            </div>
        </div>
    <div className="container-fluid div-green my-5 py-5 text-center">
    <h2 className="featured-heading mt-5 pb-5">FUN FACTS</h2>
        <div className='row justify-content-center mb-5 pb-5'>
            <div className='col-4'>
                <img src={img9} alt="Promotion" className="img-fluid"/>
            </div>
            <div className='col-4'>
                <img src={img10} alt="Promotion" className="img-fluid"/>
            </div><div className='col-4'>
                <img src={img11} alt="Promotion" className="img-fluid"/>
            </div>
        </div>
    </div>
    <div className="container my-4 py-4">
    <h2 className="featured-heading mt-5 pb-2">TESTIMONIALS</h2>
    <div className="row">
        {/* <!-- Card 1 --> */}
        <div className="col-md-4">
            <div className="card cardnazar">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-muted mt-1 mx-3'>Marissa Elise - Deerfield Beach, FL</p>
                    <h5 className="card-title mt-4 mx-3">MY MAIL LADY THOUGHT IT WAS REAL CUPCAKES</h5>
                    <p className="card-text mx-3">"My mail lady, who’s the best, swore the packages had cupcakes in it. Actually the whole post office did. She was very disappointed when I told her there weren’t any cupcakes inside!"</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="col-md-4">
            <div className="card cardnazar">
            <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-muted mt-1 mx-3'>@that.ham.life</p>
                    <h5 className="card-title mt-4 mx-3">LIFE LONG FRIENDS</h5>
                    <p className="card-text mx-3">"I discovered Johnny Cupcakes tees at a pop-up in the Phoenix, Arizona, area around 2009 I think… met a bunch of really kind, wonderful, accepting, welcoming, and like-minded people who also loved the brand and made lifelong friends! Still collect your tees and merch today and now buy for my whole family, including my two sons, 12 and 8, who have also grown up with the brand!!"</p>
                </div>
            </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="col-md-4">
            <div className="card cardnazar">
                <div className="card-body">
                    <div className="star-rating fs-5 mt-3 mx-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-muted mt-1 mx-3'>Sydney Epter - Hendersonville, NC</p>
                    <h5 className="card-title mt-4 mx-3">115+ T-SHIRTS</h5>
                    <p className="card-text mx-3">"I’ve been a Johnny Cupcakes fan for about 12 years. Watching the company and Johnny grow over the years has been so great! I became really active in the community and had over 115+ shirts at one point and I loved every one of them! In 2018, my mom passed and, to my surprise, a bouquet of flowers from Johnny Cupcakes came to her service. How incredible is it to be a part of a community to reach out and do something so sweet during the hardest thing I’ve ever gone through? I will never forget that gesture."</p>
                </div>
            </div>
        </div>
    </div>
</div>
         <div class="container container2 mt-5 pt-3">
        <div class="row">
            <div class="col-md-6 mb-4 d-flex align-items-stretch">
            <div className="container">
                    <div className='row'>
                    <div className="col-md-6">
                    <div class="box position-relative w-100">
                    <video class="w-100" controls>
                        <source src="path/to/video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div class="overlay">COME VISIT THE NEW BAKERY!</div>
                </div>
                    </div>
                        <div className="col-md-6">
                        <div class="box position-relative">
                        <img src={img12} alt="Promotion" className="img-fluid promo-image img2nafar" />
                        <div class="overlay">SHOP UNIQUE GIFTS & WEARABLE BAKED GOODS!</div>
                        </div>
                    </div>
                    </div>
                    <div className='row'>
                    <div class="col-12 d-flex align-items-stretch">
                        <div class="box position-relative position-relative1 w-100 mt-4">
                            <img src={img13} class="w-100 img-fluid promo-image johny" alt="Johnny's Journey"/>
                            <div class="overlay">LEARN ABOUT JOHNNY'S JOURNEY FROM THE TRUNK OF HIS CAR, TO GROWING THE JOHNNY CUPCAKES T-SHIRT BRAND!</div>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-6">
            <div class="box position-relative position-relative2">
                    <img src={img18} alt="Promotion" className="img-fluid promo-image img-mov" />
                    <div class="overlay">LEARN ABOUT JOHNNY'S JOURNEY FROM THE TRUNK OF HIS CAR, TO GROWING THE JOHNNY CUPCAKES T-SHIRT BRAND!</div>
                    </div>
                </div>
        </div>
    </div>
    {/*  */}
    <div class="container-fluid mt-5 pt-1">
    <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="favorites-heading ms-5">FRESH FAVORITES!</h2>
                <a href="#view-all" className="view-all-link mt-1 me-5">VIEW ALL <FontAwesomeIcon icon={faChevronRight}/></a>
            </div>
            <div className="testimonials-container mt-4 pb-5 ms-3">
  <div className="testimonials" style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgbox ms-3">
          <img src={testimonial.image} alt="" className="img-fluid imgcart" />
          <img src={testimonial.hoverImage} alt="" className="hover-image"/>
          <Button className='button' variant="" onClick={handleClick}>+ Quick add</Button>
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
    </div>
    {/*  */}
    <div className="container promotion-container">
            <div className="row">
              <p className='fw-bolder fs-1 SHOP-THE'>SHOP THE LOOK</p>
                <div className="col-md-6">
                    <img src={img20} alt="Promotion" className="img-fluid promo-image" />
                    <button className="btn-circle-last">
                    <div className="circle-background1"></div>
                    </button>
                    <button className="btn-circle-last2">
                    <div className="circle-background2"></div>
                    </button>
                </div>
                <div className="col-md-1"></div>
                <div class="col-md-4">
                    <div className="row text-center">
                        <div class="box imgboxlast  col-md-12">
                            <img src={img19} class="img-fluid img-card-last " alt="Image 3"/>
                            <img src={img17} alt="" className="hover-image"/>
                            <Button className='button' variant="" onClick={handleClick}>+ Quick add</Button>
                        </div>
                        <p className='promo-details promo-detailshome pimagedetail'>TIGER CAMO CROSSBONES PULLOVER</p>
                            <p className='text-muted pimagedetail1'>€91,95</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
        <div className="container-fluid div-purple py-5 text-center">
            <div className='row marquee-content1 justify-content-center align-items-center mb-5 pb-5 row-last'>
                <p className="align-items-center marquee-text1 johnylast">WORLD'S FIRST T-SHIRT BAKERY</p>
            </div>
    </div>
    {/*  */}
    <Modal show={show} onHide={handleClose}>
    <div class="modal-header"><div class="modal-title h4">Quick add</div><button type="button" class="btn-close" aria-label="Close" onClick={handleClose}></button></div>
        <Modal.Body>
            <Modal1 isOpen={isModalOpen} onClose={() => setModalOpen(false)} product={product} />
        </Modal.Body>
      </Modal>
    {/*  */}
    <button className="btn sadegh-button p-3 px-4">SUPPORT</button>
        <Footer/>
  </div>
 );
}    
export default Home;
