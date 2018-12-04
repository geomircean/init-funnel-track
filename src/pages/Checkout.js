import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Product from '../components/ProductThumb';
import loadTrackingScript from '../tracking-script-g000';
import { products } from '../utils/mock-data';

class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state = { rndNo: 2 };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(ev) {
    const { value } = ev.currentTarget;
    this.setState({ rndNo: value });
  }

  componentDidMount() {
    loadTrackingScript();
  }

  componentDidUpdate(prevProps, prevState) {
    /** Cart has changed structure so we need the new cart in the backend */
    if (prevState.rndNo !== this.state.rndNo) {
      loadTrackingScript();
    }
  }

  render () {
  const { rndNo } = this.state;
  const orderedProducts = !isNaN(rndNo) ? products.filter(item => item.id % rndNo === 0) : products;
  const total = orderedProducts.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Container>
      <h2>Checkout</h2>

      <div className='cart-content'>
        <input
          type='number'
          min={1}
          max={7}
          value={rndNo}
          onChange={this.changeValue}
        />
        <div id='htmlcontent'>
          <div id='items' className='products'>
            {orderedProducts.map(item => <Product key={`ordered-${item.id}`} {...item}/>)}
          </div>
          <div id='details'>
            <div className='totals'>
              Order Total: ${total}
            </div>
            <div>
              <Link className='order-btn' to='/thank-you'>Order Now!</Link>
            </div>
            <div id='abandonedUrl'>
              <a href='https://geomircean.github.io/init-funnel-track/'>Recovery url</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
}

export default Checkout;