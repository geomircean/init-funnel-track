import React from 'react'
import { Link } from 'react-router-dom';

const ThankYou = (props) => {
  return (
    <div>
      <h2>Thank You!</h2>
      <Link to={'/'}>Go Back Home</Link>
    </div>
  )
};

export default ThankYou;