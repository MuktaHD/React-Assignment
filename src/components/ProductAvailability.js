import React from 'react';
import './ProductAvailability.css'; // Import the CSS file

function ProductAvailability({ isAvailable }) {
  return (
    <div className="product-availability">
      {isAvailable ? (
        <span className="in-stock">In Stock</span>
      ) : (
        <span className="out-of-stock">Out of Stock</span>
      )}
    </div>
  );
}

export default ProductAvailability;
