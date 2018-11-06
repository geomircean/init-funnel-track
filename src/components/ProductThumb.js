import React from 'react';

const Product = (props) => {
  const { name } = props;
  return (
    <span className='product'>
      <div className='product-image'/>
      <div className='product-name'>
        {name || 'My product'}
      </div>
    </span>
  );
};

export default Product;