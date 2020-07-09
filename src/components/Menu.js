import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const menu = [
  {
    name: 'Home',
    route: '/init-funnel-track/'
  },
  {
    name: 'About',
    route: 'about'
  },
  {
    name: 'Products',
    route: 'products'
  },
  {
    name: 'Cart',
    route: 'cart'
  },
  {
    name: 'Checkout',
    route: 'checkout'
  },
];

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: '/' };
  }

  onClick = (route) => this.setState({ selected: route });

  render () {
    const { selected } = this.state;
    return (
      <ul className='App-menu'>
        {
          menu.map((item, index) => (
            <li
              key={`menu-${index}`}
              className={`App-menu-item ${selected === item.route ? 'highlight' : ''}`}
            >
              <Link
                to={item.route}
                onClick={() => this.onClick(item.route)}
              >
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
};

export default NavMenu;
