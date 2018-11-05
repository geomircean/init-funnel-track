import React from 'react'

const menu = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Cart',
    route: '/cart'
  },
  {
    name: 'Checkout',
    route: '/checkout'
  },
  {
    name: 'About',
    route: '/cart'
  }
];

const NavMenu = () => {
  return (
    <div>
      <ul>
        {
          menu.map((item, index) => (
            <li key={`menu-${index}`}>
              <a href={item.route}>{item.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default NavMenu;