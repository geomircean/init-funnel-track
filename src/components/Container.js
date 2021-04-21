import React, { Component } from 'react';
import loadTrackingScript from '../tracking-script-immqa3';

class Container extends Component {
  componentDidMount() {
    setTimeout(loadTrackingScript, 10);
  }

  render() {
    const { children } = this.props;

    return (
      <div className='container'>
        {children}
      </div>
    );
  }s
}

export default Container;
