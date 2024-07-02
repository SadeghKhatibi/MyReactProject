import React from 'react';
import img21 from '../image/johnny-cupcakes_450x200-1.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faTwitter , faYoutube , faLinkedin , faTiktok , faSpotify , faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
const Footer = () =>{
  return(
    <div>
    <footer className="footer bg-black text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 d-flex flex-column">
                        <img src={img21} alt="Logo" className="footer-logo mb-3" />
                        <h5>JOIN THE MAILING LIST</h5>
                        <p className='pop-up'>↓ DEALS & DROPS & POP-UP SHOPS ↓</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="E-mail" />
                            <button className="btn btn-outline-secondary" type="button">→</button>
                        </div>
                        <div className="social-icons d-flex justify-content-center mt-4">
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faSpotify} /></a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Wholesale</a></li>
                            <li><a href="#">Speaking</a></li>
                            <li><a href="#">Custom Merch</a></li>
                            <li><a href="#">Who We Support</a></li>
                            <li><a href="#">Spotify Monthly Playlist</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Sizing Chart</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Your Account</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Bakery</h5>
                        <p>Johnny Cupcakes Flagship<br/>
                        332 Newbury Street<br/>
                        Boston, MA 02116 USA<br/>
                        617-375-0100</p>
                        <p>Johnny Cupcakes HQ<br/>
                        36 Finnell Drive STE #1<br/>
                        Weymouth, MA 02188 USA<br/>
                        866-606-CAKE</p>
                    </div>
                </div>
                <div className="brandlast mt-4">
                    <p>© 2024, Johnny Cupcakes.</p>
                </div>
            </div>
        </footer>
        </div>
  )
}
export default Footer;