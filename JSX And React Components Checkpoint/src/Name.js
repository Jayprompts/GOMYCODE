import React from 'react';
import product from './product';

function Name() {
  return (
    <h2 className="product-title fw-bold text-dark fs-4 mb-2">
      {product.name}
    </h2>
  );
}

export default Name;
