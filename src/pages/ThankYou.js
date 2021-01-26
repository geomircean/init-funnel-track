import React from 'react'
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid'
import Container from '../components/Container';
import Product from '../components/ProductThumb';

const ThankYou = (props) => {
  const orderId = nanoid();
  const date = new Date();
  const { rndNo, products } = props;
  const orderedProducts = !isNaN(rndNo) ? products.filter(item => item.id % rndNo === 0) : products;
  const total = orderedProducts.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Container>
      <h2>Thank You!</h2>
      <div className='order-id'>
        <span>Your Order Id: &nbsp; </span>
        <span id='OrderId'>{orderId}</span>
      </div>
      <div className='order-date'>
        <span> Order Date: </span>
        <span id='OrderDate'>{date.toString()}</span>
      </div>
      <div className='order-total'>
        <span>Grand Total: </span> <span id='OrderTotal'>{total}</span>
      </div>
      <div id='items' className='products'>
        {orderedProducts.map(item => <Product key={`ordered-${item.id}`} {...item}/>)}
      </div>
      <Link to={'/'}>Go Back Home</Link>
    </Container>
  )
};

export default ThankYou;