import React, { Component } from 'react';
import loadTrackingScript from '../tracking-script';

class Container extends Component {
  componentDidMount() {
    console.log('entered');
    loadTrackingScript();
  }

  render() {
    const { children } = this.props;

    return (
      <div className='container'>
        {children}
      </div>
    );
  }
}

export default Container;