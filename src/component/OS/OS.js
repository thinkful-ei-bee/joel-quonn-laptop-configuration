import React, { Component } from 'react';

export default class OS extends Component {

  render() {

    const oses = this.props.OS.map((os, index) => {
      const selectedClass = os.name === this.props.OS.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;

      return (
        <li key={index} className="feature__item">
          <div 
            className={featureClass}
            onClick={e => this.props.handleUpdateOS("OS", os)}
          >
            { os.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(os.cost) })
          </div>
        </li>
      )
    });

    return (
      <>
        <div className="feature">OS</div>
        <div className="feature__name"></div>
        <ul className="feature__list">
        { oses }
        </ul>
      </>
    )
  }
}

OS.defaultProps = {
  processors: {}
}