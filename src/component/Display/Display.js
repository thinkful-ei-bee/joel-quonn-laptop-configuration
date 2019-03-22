import React, { Component } from 'react';

export default class Display extends Component {

  render() {

    const displays = this.props.displays.map((display, index) => {
      const selectedClass = display.name === this.props.displays.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;

      return (
        <li key={index} className="feature__item">
          <div 
            className={featureClass}
            onClick={e => this.props.handleUpdateDisplay("Display", display)}
          >
            { display.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(display.cost) })
          </div>
        </li>
      )
    });

    return (
      <>
        <div className="feature">Display</div>
        <div className="feature__name"></div>
        <ul className="feature__list">
        { displays }
        </ul>
      </>
    )
  }
}

Display.defaultProps = {
  processors: {}
}