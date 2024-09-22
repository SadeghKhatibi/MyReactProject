import React, { useContext } from 'react';
import ProductContext from './ProductContext';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="mt-5">
      <h3>Product Details</h3>
      {products.map((product, index) => (
        <div key={index} className="mb-4">
          <h4>{product.productName}</h4>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <ul>
            {Object.keys(product.stock).map((key) => {
              const [color, size] = key.split('_');
              return (
                <li key={key}>
                  {color} - {size}: {product.stock[key]} items
                </li>
              );
            })}
          </ul>
          <div className="image-previews">
            {product.images.map((image, idx) => (
              <img key={idx} src={URL.createObjectURL(image)} alt={`Uploaded Image ${idx + 1}`} className="img-fluid" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
