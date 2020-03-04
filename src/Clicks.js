import React from 'react';
import './App.css';

class Clicks extends React.Component {
    constructor(props) {
      super(props);
    
    }
  
    render() {
      return (
       <p>
           {this.props.count} time(s) clicked
       </p>
      );
    }
  }
  
  export default Clicks;