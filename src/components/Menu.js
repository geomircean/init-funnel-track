import React from 'react'
import { Link } from 'react-router-dom';

const menu = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Cart',
    route: 'cart'
  },
  {
    name: 'Checkout',
    route: 'checkout'
  },
  {
    name: 'About',
    route: 'about'
  }
];

const NavMenu = () => {
  return (
    <div>
      <ul>
        {
          menu.map((item, index) => (
            <li key={`menu-${index}`}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default NavMenu;