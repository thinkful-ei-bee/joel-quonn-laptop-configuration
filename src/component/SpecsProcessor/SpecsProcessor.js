import React, { Component } from 'react';

export default class SpecsProcessor extends Component {

  render() {
    console.log(this.props.processors)

    const features = Object.keys(this.props.processors)
      .map(key => {
        const processors = this.props.processors.map((processor, index) => {
          
          const selectedClass = processor.name === this.props.processors.name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;

          console.log(selectedClass);

          return (
            <li key={index} className="feature__item">
              <div 
                className={featureClass}
                onClick={e => this.props.handleUpdateProcessor(key, processor)}
              >
                { processor.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(processor.cost) })
              </div>
            </li>
          )
        });

        return (
          <>
            
              { processors }
           
          </>
        )

      });
    
    console.log(features);

    return (
      <>
        <div className="feature">Processor</div>
        <div className="feature__name"></div>
        <ul className="feature__list">
        { features }
        </ul>
      </>
    )
  }
}

SpecsProcessor.defaultProps = {
  processors: {}
}