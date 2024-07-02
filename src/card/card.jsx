import React from "react";
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/thumbnail-10collaborage.webp'
import './card.css'
const Card = () =>{
  return(
  <div>
    <Mynav/>
    <div className="container mt-5">
      <div className="row text-center">
        <p className="fs-1 fw-bolder mt-5">CART</p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={img1} alt="Sprinkles Crossbones" className="img-thumbnail me-2" />
                <div>
                  <p>Sprinkles Crossbones</p>
                  <p>€67,90</p>
                  <p>Adult / 2XL / Black</p>
                </div>
              </div>
            </td>
            <td>
              <input type="number" className="form-control" value="2" />
              <label className="form-label mt-2 text-muted">Remove</label>
            </td>
            <td>€67,90</td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={img1} alt="KIDS Meowcakes" className="img-thumbnail me-2"/>
                <div>
                  <p>KIDS Meowcakes</p>
                  <p>€33,95</p>
                  <p>Kids / 2T / Blue</p>
                </div>
              </div>
            </td>
            <td>
              <input type="number" className="form-control" value="1" />
              <label className="form-label mt-2 text-muted">Remove</label>
            </td>
            <td>€33,95</td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={img1} alt="Free Mystery Greeting Card" className="img-thumbnail me-2"/>
                <div>
                  <p>Free Mystery Greeting Card</p>
                  <p>FREE!</p>
                  <p>Gift ID : 8900</p>
                </div>
              </div>
            </td>
            <td>
              <input type="number" className="form-control" value="1" />
              <label className="form-label mt-2 text-muted">Remove</label>

            </td>
            <td>€0,00</td>
          </tr>
        </tbody>
      </table>
      <div className="estimate-shipping mt-4">
        <h5>Estimate Shipping</h5>
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">Country</label>
            <select id="country" className="form-select">
              <option selected>United States</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="province" className="form-label">Province</label>
            <select id="province" className="form-select">
              <option selected>Alabama</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="zip" className="form-label">Zip code</label>
            <input type="text" className="form-control" id="zip" />
          </div>
        </form>
        <button className="btn promo-button mt-3 mb-5">Estimate</button>
      </div>
    </div>
    <Footer/>
  </div>
  );
}
export default Card;