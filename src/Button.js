import React from 'react';
import './App.css';

function Button(props) {
    return (
      <div className="button">
      
      <button
          className="click-btn"
          onClick={() => props.handleClick() }
        >
          Click Me
        </button>
  
      </div>
    );
  }
  
  export default Button;
