import React from 'react';
import product from './product';

function Description() {
  return (
    <p className="product-description text-muted mb-4" style={{ lineHeight: '1.6' }}>
      {product.description}
    </p>
  );
}

export default Description;
