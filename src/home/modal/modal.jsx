import React, { useEffect } from 'react';
import './modal.css'
const Modal1 = ({ isOpen, onClose, product })=>{
  if (!isOpen) return null;
  return(
    <div>
      <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 modal-body">
            <img src={product.image} alt={product.name} />
            </div>
            <div className='col-md-8'>
            <h6 className='fs-6 mt-3'>{product.name}</h6> 
            <p className=''>{product.price}</p>
            </div>
          </div>
        <hr />
        <div className="row">
          <p><span className='text-muted'>Size:</span> Adult / XS</p>
        </div>
        <div className="row">
          <div className='col-md-12'>
          <button className='btnsize'>Adult / XS</button>
        <button className='btnsize ms-2'>Adult / Small</button>
          <button className='btnsize ms-2'>Adult / Medium</button>
          <button className='btnsize btnsize1 ms-2 mt-2'>Adult / Large</button>
          <button className='btnsize ms-2'>Adult / Xl</button>
          <button className='btnsize ms-2'>Adult / 2Xl</button>
          <button className='btnsize ms-2'>Adult / 3xl</button>
          </div>
        </div>
        <div className='row'>
          <p className='mt-3'><span className='text-muted'>Color:</span> Grey</p>
          <div className="col-md-5"></div>
          <div className="col-md-1"><button className='btnsize'>Grey</button></div>
        </div>
        </div>
        <button className="modal-add-to-cart">Add to cart</button>
      </div>
    </div>
    </div>
  );
}
export default Modal1;