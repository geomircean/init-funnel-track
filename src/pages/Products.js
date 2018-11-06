import React from 'react'
import Container from '../components/Container';
import Product from '../components/ProductThumb';

const availableProducts = [{
  id: 1,
  name: 'Dwarf Cleric',
}, {
  id: 2,
  name: 'Gnome Wizard',
}, {
  id: 3,
  name: 'Human Paladin',
}, {
  id: 4,
  name: 'Tiefling Sorcerer',
}];

const Products = (props) => {

  return (
    <Container>
      <h2>Products</h2>
      <div className='products'>
        {availableProducts.map(item => <Product key={`product-${item.id}`} {...item}/>)}
      </div>
    </Container>
  );
};

export default Products;