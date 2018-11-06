import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const ThankYou = (props) => {
  return (
    <Container>
      <h2>Thank You!</h2>
      <Link to={'/'}>Go Back Home</Link>
    </Container>
  )
};

export default ThankYou;