import React, { Component } from 'react';
import loadTrackingScript from '../tracking-script-g000';
import trackingScriptQA3 from '../tracking-script-immqa3';

class Container extends Component {
  componentDidMount() {
    setTimeout(loadTrackingScript, 10);
    setTimeout(trackingScriptQA3, 10);
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
