import React from 'react'
import Container from '../components/Container';
import Product from '../components/ProductThumb';
import { products as availableProducts } from '../utils/mock-data';

const Products = (props) => {
  return (
    <Container key='products'>
      <h2>Products</h2>
      <div className='products'>
        {availableProducts.map(item => <Product key={`product-${item.id}`} {...item}/>)}
      </div>
    </Container>
  );
};

export default Products;