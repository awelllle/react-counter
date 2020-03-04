import React from 'react';
import './App.css';
import Button from './Button';
import Clicks from './Clicks';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);

    this.state = {
      count: 0,
    };
  
  }
   increaseCounter () {

    this.setState((state, props) => ({
      count: state.count + 1
    }));
  }



  render() {
    return (
      <div className="App">
     
      <h2 className="heading">Simple React Counter</h2>
      <Clicks count = {this.state.count} />
      <Button handleClick = {this.increaseCounter}  />


   
   </div>
    );
  }
}

export default App;
