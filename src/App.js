import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Summary from './component/Summary/Summary';
import SummaryTotal from './component/SummaryTotal/SummaryTotal';
import Processor from './component/Processor/Processor';
import OS from './component/OS/OS';
import VideoCard from './component/VideoCard/VideoCard';
import Display from './component/Display/Display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        OS: {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        VideoCard:{
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
      .reduce((accumulator, feature) => accumulator + this.state.selected[feature].cost, 0);    

    return (
      <div className="App">
        <Header />
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Processor 
              processors={this.props.features.Processor}
              selected={this.state.selected.Processor}
              handleUpdateProcessor={(processor, value) => this.updateFeature(processor, value)}
            />
            <OS 
              OS={this.props.features.OS} 
              selected={this.state.selected.OS} 
              handleUpdateOS={(OS, value) => this.updateFeature(OS, value)}
            />
            <VideoCard 
              VC={this.props.features.VideoCard} 
              selected={this.state.selected.VideoCard} 
              handleUpdateVideoCard={(VideoCard, value) => this.updateFeature(VideoCard, value)}
            />
            <Display 
              displays={this.props.features.Display} 
              selected={this.state.selected.Display} 
              handleUpdateDisplay={(Display, value) => this.updateFeature(Display, value)}
            />
          </section>
          <section className="main__summary">
            <Summary selected={this.state.selected} />
            <SummaryTotal total={total} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
