import React , {useContext , useState} from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../ProductContext/ProductContext';
import './modal.css';
const Modal1 = ({ isOpen, onClose, product  }) => {
  const { addToCart } = useContext(ProductContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  if (!isOpen || !product) return null;
  const handleAddToCartClick = () => {
    const productWithSelection = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addToCart(productWithSelection);
    onClose(); 
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 modal-body">
              {product.images && product.images.length > 0 ? (
                <img src={URL.createObjectURL(product.images[0])} alt={product.productName} />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="col-md-8">
              <h6 className="fs-6 mt-3">{product.productName}</h6>
              <p>€{product.price}</p>
            </div>
          </div>
          <hr />
          <div className="row">
          <p><span className="text-muted">Size:</span></p>
            {product.selectedSizes && product.selectedSizes.length > 0 ? (
              product.selectedSizes.map((size, index) => (
                <button key={index} className={`btnsize ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}>{size}</button>
              ))
            ) : (
              <p>No sizes selected</p>
            )}
          </div>
          <hr />
          <div className="row">
          <p><span className="text-muted">Color:</span></p>
            {product.selectedColors && product.selectedColors.length > 0 ? (
              product.selectedColors.map((color, index) => (
                <button key={index} className={`btnsize ${selectedColor === color ? 'selected' : ''}`}
                onClick={() => setSelectedColor(color)}>{color}</button>
              ))
            ) : (
              <p>No colors selected</p>
            )}
          </div>
          <Link to="/Card"><button className="modal-add-to-cart" onClick={handleAddToCartClick}>Add to cart</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Modal1;