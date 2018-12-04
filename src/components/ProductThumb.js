import React from 'react';

const Product = (props) => {
  const { name, price, image } = props;
  const displayPrice = !isNaN(price) ? `$${price}` : 'N/A';

  return (
    <span className='product'>
      <div className='product-image'>
        <img src={image} alt={name}/>
      </div>
      <div className='product-name'>
        {name || 'My product'}
      </div>
      <div className='product-price'>
        {displayPrice}
      </div>
    </span>
  );
};

export default Product;