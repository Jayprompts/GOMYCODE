import React from 'react';
import product from './product';

function Image() {
  return (
    <div className="product-image-container position-relative overflow-hidden" style={{ height: '280px', backgroundColor: '#0f172a' }}>
      <img
        src={product.image}
        alt={product.name}
        className="product-image w-100 h-100"
        style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
      />
    </div>
  );
}

export default Image;
