import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/form/Form';
import List from './components/list/List';

const dbUrl = "http://ec2-54-201-217-62.us-west-2.compute.amazonaws.com:4200";

class App extends Component {

    constructor(props) {

		super(props);

		this.state = {
            itemTypes: [],
            itemSpecials: [],
            itemBaseList: [],
            itemList: [],
        };

        fetch(`${dbUrl}/items-type`, {
			method: 'GET',
		})
		.then(response => response.json())
		.then(data => {
            this.setState({
                itemTypes: data, 
            })
		})
		.catch((error) => {
			console.error('Error:', error);
        });
        
        fetch(`${dbUrl}/items-special`, {
			method: 'GET',
		})
		.then(response => response.json())
		.then(data => {
            this.setState({
                itemSpecials: data, 
            })
		})
		.catch((error) => {
			console.error('Error:', error);
		});

        fetch(`${dbUrl}/items-base`, {
			method: 'GET',
		})
		.then(response => response.json())
		.then(data => {
            this.setState({
                itemBaseList: data, 
            })
		})
		.catch((error) => {
			console.error('Error:', error);
        });
        
        this.updateList = this.updateList.bind(this);
    }
        
    updateList() {
        fetch(`${dbUrl}/items-base`, {
			method: 'GET',
		})
		.then(response => response.json())
		.then(data => {
            this.setState({
                itemBaseList: data, 
            })
		})
		.catch((error) => {
			console.error('Error:', error);
        });
    }

  render() {
    const { itemTypes, itemSpecials, itemBaseList } = this.state;

    return (
      <div className="App">
		  
        <div className="main-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PSO Price Checker</h2>
        </div>

        <div>
            <Form 
                data={{
                    itemTypes,
                    itemSpecials,
                    itemBaseList
                }}
                methods={{
                    updateList: this.updateList
                }}
            />
        </div>

        <div>
            <List 
                data={{ 
                    itemBaseList
                }}
            />
        </div>
      </div>
    );
  }
}

export default App;
