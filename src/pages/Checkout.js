import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Checkout = () => {
  return (
    <Container>
      <h2>Checkout</h2>
      <Link to='/thank-you'>Hit me up!</Link>
    </Container>
  )
};

export default Checkout;