import React, { Component } from 'react';

export default class VideoCard extends Component {

  render() {

    const videoCards = this.props.VC.map((videoCard, index) => {
      const selectedClass = videoCard.name === this.props.VC.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;

      return (
        <li key={index} className="feature__item">
          <div 
            className={featureClass}
            onClick={e => this.props.handleUpdateVideoCard("VideoCard", videoCard)}
          >
            { videoCard.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(videoCard.cost) })
          </div>
        </li>
      )
    });

    return (
      <>
        <div className="feature">OS</div>
        <div className="feature__name"></div>
        <ul className="feature__list">
        { videoCards }
        </ul>
      </>
    )
  }
}

VideoCard.defaultProps = {
  processors: {}
}