import React , {useContext , useState} from "react";
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/thumbnail-10collaborage.webp'
import ProductContext from "../ProductContext/ProductContext";
import './card.css'
const Card = () =>{
  const { cartItems, removeFromCart, updateCartItemQuantity, products } = useContext(ProductContext);

  const handleQuantityChange = (event, item) => {
    const newQuantity = parseInt(event.target.value, 10);

    const product = products.find(p =>
      p.productName === item.productName &&
      p.selectedSizes.includes(item.selectedSize) &&
      p.selectedColors.includes(item.selectedColor)
    );

    if (product) {
      const stockKey = `${item.selectedColor}_${item.selectedSize}`;
      const availableStock = product.stock[stockKey] || 0;

      if (newQuantity > availableStock) {
        alert('Quantity exceeds available stock.');
        return;
      }

      updateCartItemQuantity(item, newQuantity);
    }
  };
  const handleRemoveClick = (item) => {
    removeFromCart(item);
  };
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
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>
              <div className="d-flex align-items-center">
                <img src={URL.createObjectURL(item.images[0])} alt={item.productName} className="img-thumbnail me-2" />
                <div>
                  <p>{item.productName}</p>
                  <p>€{item.price}</p>
                  <p>{item.selectedSize} / {item.selectedColor}</p>
                </div>
              </div>
            </td>
            <td>
            <input
              type="number"
              className="form-control"
              min={1}
              value={item.quantity}
              onChange={(e) => handleQuantityChange(e, item)}
            />
            <label
                className="form-label form-label1 mt-2 text-muted"
                onClick={() => handleRemoveClick(item)}
                style={{ cursor: 'pointer' }}
              >
                Remove
              </label>
            </td>
            <td>€{item.price * item.quantity}</td>
          </tr>
        ))}
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