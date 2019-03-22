import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Summary from './component/Summary/Summary';
import SummaryTotal from './component/SummaryTotal/SummaryTotal';
import SpecsProcessor from './component/SpecsProcessor/SpecsProcessor';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    const total = Object.keys(this.state.selected)
      .reduce((accumulator, currentValue) => accumulator + this.state.selected[currentValue].cost, 0);    

    const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return <li key={index} className="feature__item">
            <div className={featureClass}
              
              onClick={e => this.updateFeature(key, item)}>
                { item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(item.cost) })
            </div>
          </li>
        });

        return <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">
            { options }
          </ul>
        </div>
      });      

    return (
      <div className="App">
        <Header />
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <SpecsProcessor 
              processors={this.props.features.Processor}
              selected={this.state.selected.Processor}
              handleUpdateProcessor={processor=>this.updateFeature(processor)} 
            />
            {/* { features } */}
          </section>
          <section className="main__summary">
            {/* <h3>NEW GREENLEAF 2018</h3> */}
            {/* {summary} */}
            <Summary selected={this.state.selected} />
            <SummaryTotal total={total} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
