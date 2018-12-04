import React, { Component } from 'react';
import loadTrackingScript from '../tracking-script-g000';

class Container extends Component {
  componentDidMount() {
    setTimeout(loadTrackingScript, 200);
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