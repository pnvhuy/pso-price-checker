import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
		  
        <div className="main-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PSO Price Checker</h2>
        </div>

        <div>
			<Form />
        </div>
      </div>
    );
  }
}

export default App;
