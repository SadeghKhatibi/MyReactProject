import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import img22 from'../image/Untitled_22-Oct-2022-110352.webp'
import img23 from '../image/Untitled_22-Oct-2022-123649.webp'
import img24 from '../image/Untitled_22-Oct-2022-110845.webp'
import img25 from'../image/ghorbghe.webp'
import img26 from'../image/mobile.webp'
import img27 from '../image/khatkesh.webp'
import img28 from '../image/medad.webp'
import img29 from '../image/ketab.webp'
import img30 from '../image/parande.webp'
import img31 from '../image/kerm.webp'
import img32 from '../image/kiosk.webp'
import img33 from '../image/search.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faUser , faSearch} from '@fortawesome/free-solid-svg-icons';
import { faInstagram , faTwitter , faYoutube , faLinkedin , faTiktok  , faFacebook } from '@fortawesome/free-brands-svg-icons';
import './mynav.css'
const Mynav = () =>{
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 48.4 && currentScrollY < 180) {
      setIsScrolled(true);
      setIsVisible(true);
    } else {
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY) {
        // اگر به بالا اسکرول کنیم، نوار پیمایش ظاهر می‌شود
        setIsVisible(false);
      } else {
        // اگر به پایین اسکرول کنیم، نوار پیمایش پنهان می‌شود
        setIsVisible(true);
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return(
    <div>
<div className='marquee'>
  <div className="marquee-content">
      <p className='marquee-text'>Get up to 4 FREE gifts with your order when you spend $130 USD or more!</p>
      <p className='marquee-text'>Get up to 4 FREE gifts with your order when you spend $130 USD or more!</p>
      <p className='marquee-text'>Get up to 4 FREE gifts with your order when you spend $130 USD or more!</p>
      <p className='marquee-text'>Get up to 4 FREE gifts with your order when you spend $130 USD or more!</p>
      <p className='marquee-text'>Get up to 4 FREE gifts with your order when you spend $130 USD or more!</p>
      <p className='marquee-text'>Get up to 4 FREE gifts with your order when you spend $130 USD or more!</p>
      </div>
    </div>
    <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'fixed-top' : ''} ${isVisible ? '' : 'hidden'}`}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">JOHNNY CUPCAKES®</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto ms-5 ps-5">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 shop
                </a>
                <div className="dropdown-menu mega-menu1" aria-labelledby="navbarDropdown">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                    <div className="col-md-3 mt-3">
                        <h4 className='fw-bold ps-3'>CLOTHING</h4>
                        <p className="mt-3 ps-3">
                        <p><Link to="/shop" className='mega-menu-text1'>Shop All</Link></p><p><Link to="/shop" className='mega-menu-text1'>T-Shirts</Link></p>
{/* <p className='mega-menu-text1'>Shop All</p><p className='mega-menu-text1'>T-Shirts</p> */}
                        <p><Link to="/shop" className='mega-menu-text1'>Hoodies + Sweats</Link></p><p><Link to="/shop" className='mega-menu-text1'>Long-Sleeve</Link></p><p><Link to="/shop" className='mega-menu-text1'>Best Sellers</Link></p><p><Link to="/shop" className='mega-menu-text1'>Freshly Baked</Link></p><p><Link to="/shop" className='mega-menu-text1'>Bake Sale</Link></p>
                        {/* <p className='mega-menu-text1'>Hoodies + Sweats</p><p className='mega-menu-text1'>Long-Sleeve</p><p className='mega-menu-text1'>Best Sellers</p><p className='mega-menu-text1'>Freshly Baked</p><p className='mega-menu-text1'>Bake Sale</p> */}
                        </p>
                      </div>
                      <div className="col-md-3 mt-3">
                      <h4 className='fw-bold ps-3'>ACCESSORIES</h4>
                        <p className="mt-3 ps-3">
                        <p><Link to="/shop" className='mega-menu-text1'>Shop All</Link></p><p><Link to="/shop" className='mega-menu-text1'>Stickers + Pins</Link></p><p><Link to="/shop" className='mega-menu-text1'>Hats</Link></p><p><Link to="/shop" className='mega-menu-text1'>Socks</Link></p><p><Link to="/shop" className='mega-menu-text1'>Home + Office</Link></p><p><Link to="/shop" className='mega-menu-text1'>E-Gift Card</Link></p><p><Link to="/shop" className='mega-menu-text1'>Art Prints</Link></p>
                        </p>
                      </div>
                      <div className="col-md-3 mt-3">
                        <h4 className='fw-bold ps-3'>kids</h4>
                        <p className="mt-3 ps-3">
                        <p><Link to="/shop" className='mega-menu-text1'>Shop All</Link></p><p><Link to="/shop" className='mega-menu-text1'>Onesies</Link></p><p><Link to="/shop" className='mega-menu-text1'>Sweats</Link></p><p><Link to="/shop" className='mega-menu-text1'>T-Shirts</Link></p>
                        </p>
                      </div>
                      <div className="col-md-3 mt-3">
                      <h4 className='fw-bold ps-3'>GREETING CARDS</h4>
                        <p className="mt-3 ps-3">
                        <p><Link to="/shop" className='mega-menu-text1'>Shop All</Link></p><p><Link to="/shop" className='mega-menu-text1'>Birthday</Link></p><p><Link to="/shop" className='mega-menu-text1'>Everyday</Link></p><p><Link to="/shop" className='mega-menu-text1'>Thank You</Link></p><p><Link to="/shop" className='mega-menu-text1'>Congrats & Life Events</Link></p><p><Link to="/shop" className='mega-menu-text1'>Friendship & Love</Link></p><p><Link to="/shop" className='mega-menu-text1'>Sympathy & Encouragement</Link></p><p><Link to="/shop" className='mega-menu-text1'>All Holiday</Link></p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 about
                </a>
                <div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                    <div className="col-md-3 mt-3">
                        <h4 className='fw-bold'>THE STORY</h4>
                        <p className="mega-menu-text1 mt-3">
                          For 20+ years I've tricked<br/> hungry people with my limited <br/>edition, culinary themed, T-<br/>shirt brand. Enter my frosting-<br/>scented, retro-bakery-inspired<br/> clothing store through a giant <br/>oven entrance where you'll <br/>find T-shirts in refrigerators.<br/><br />LEARN MORE
                        </p>
                      </div>
                      <div className="col-md-3 text-center">
                      <Link to="/about" className='mega-menu-text1'><div class="box imgboxfirst d-flex flex-column">
                        <h4 className='text-center'>The Story</h4>
                            <img src={img22} class="img-fluid imgcart" alt="Image 4"/>
                        </div></Link>
                      </div>
                      <div className="col-md-3 text-center">
                      <Link to="/Flagshipstore" className='mega-menu-text1'><div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Flagship Store</h4>
                            <img src={img23} class="img-fluid imgcart" alt="Image 4"/>
                        </div></Link>
                      </div>
                      <div className="col-md-3 text-center">
                      <Link to="/about" className='mega-menu-text1'><div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Giving Back</h4>
                            <img src={img24} class="img-fluid imgcart" alt="Image 4"/>
                        </div></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 bookjohnny
                </a>
                <div className="dropdown-menu mega-menu2" aria-labelledby="navbarDropdown">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                    <div className="col-md-3 mt-3">
                        <h4 className='fw-bold'>SPEAKING</h4>
                        <p className="mega-menu-text1 mt-3">
                        Through creative consulting<br/> and virtual or in person <br/>keynote talks, the head chef,<br/>Johnny Earle, teaches his<br/>secret ingredients on building<br/> brand loyalty, creating<br/>memorable experiences, and <br/>inspiring innovation!.<br/><br />LEARN MORE
                        </p>
                      </div>
                      <div className="col-md-3 text-center">
                      <Link to="/bookjohny" className='mega-menu-text1'><div class="box imgboxfirst d-flex flex-column">
                        <h4 className='text-center'>The Story</h4>
                            <img src={img25} class="img-fluid imgcart" alt="Image 4"/>
                        </div></Link>
                      </div>
                      <div className="col-md-3 text-center">
                      <Link to="/bookjohny" className='mega-menu-text1'><div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Flagship Store</h4>
                            <img src={img26} class="img-fluid imgcart" alt="Image 4"/>
                        </div></Link>
                      </div>
                      <div className="col-md-3 text-center">
                      <Link to="/bookjohny" className='mega-menu-text1'><div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Giving Back</h4>
                            <img src={img27} class="img-fluid imgcart" alt="Image 4"/>
                        </div></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                let's COLLABORATE!
                </a>
                <div className="dropdown-menu mega-menu3" aria-labelledby="navbarDropdown">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                    <div className="col-md-3 mt-3">
                        <h4 className='fw-bold'>COLLABORATE!</h4>
                        <p className="mega-menu-text1 mt-3">
                        We work with companies big<br/> and small to create custom<br/>merch & brand activations. As<br/>a unique item for corporate<br/>gifting, we work with you to<br/> conceptualize, design & co-<br/>brand a collab t-shirt for your<br/>customers, clients and events!.<br/><br />LEARN MORE
                        </p>
                      </div>
                      <div className="col-md-3 text-center">
                        <div class="box imgboxfirst d-flex flex-column">
                        <h4 className='text-center'>The Story</h4>
                            <img src={img28} class="img-fluid imgcart" alt="Image 4"/>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                      <div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Flagship Store</h4>
                            <img src={img29} class="img-fluid imgcart" alt="Image 4"/>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                      <div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Giving Back</h4>
                            <img src={img30} class="img-fluid imgcart" alt="Image 4"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                community
                </a>
                <div className="dropdown-menu mega-menu4" aria-labelledby="navbarDropdown">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                    <div className="col-md-3 mt-3">
                        <h4 className='fw-bold'>FOLLOW US!</h4>
                        <p className="mega-menu-text1 mt-3">
                        <FontAwesomeIcon icon={faInstagram} />  Instagram<br/><br/><FontAwesomeIcon icon={faTiktok} />  Tiktok<br/><br/><FontAwesomeIcon icon={faTwitter} />  Twitter<br/><br/><FontAwesomeIcon icon={faYoutube} />  Youtube<br/><br/><FontAwesomeIcon icon={faFacebook} />  Facebook<br/><br/><FontAwesomeIcon icon={faLinkedin} />  Linkedin
                        </p>
                      </div>
                      <div className="col-md-3 text-center">
                        <div class="box imgboxfirst d-flex flex-column">
                        <h4 className='text-center'>The Story</h4>
                            <img src={img31} class="img-fluid imgcart" alt="Image 4"/>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                      <div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Flagship Store</h4>
                            <img src={img32} class="img-fluid imgcart" alt="Image 4"/>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                      <div class="box imgboxfirst d-flex flex-column">
                      <h4 className='text-center'>Giving Back</h4>
                            <img src={img33} class="img-fluid imgcart" alt="Image 4"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">WHOLESALE</a>
              </li>
              <li className="nav-item faseleicon">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faSearch} /></a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} /></a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
 
export default Mynav;