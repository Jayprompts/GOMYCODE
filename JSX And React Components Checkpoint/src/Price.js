import React from 'react';
import product from './product';

function Price() {
  return (
    <div className="product-price text-primary fw-bolder fs-3 mb-2">
      {product.price}
    </div>
  );
}

export default Price;
