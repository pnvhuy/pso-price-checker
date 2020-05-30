import React, { Component } from 'react';

const dbUrl = "http://ec2-54-201-217-62.us-west-2.compute.amazonaws.com:4200";

class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			category: '', 
			type_id: '', 
			special_id: '',
		};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	  }

	handleSubmit(event) {
		fetch(`${dbUrl}/items-base`, {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				email: 'boom@boom.com'
			}),
		})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data);
			this.props.updateList();
		})
		.catch((error) => {
			console.error('Error:', error);
		});

		// alert('A name was submitted: ' + this.state.name);
		// fetch(`${dbUrl}/items-base`)
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		console.log('data', data);
		// 		this.setState({
		// 			foo: data.map(dat => dat.name)
		// 		})
		// 	});
		event.preventDefault();
	}

  	render() {
		return (
			<div className="cm-form">
				<div>
					<h3>Item Base</h3>
				</div>
				<form onSubmit={this.handleSubmit}>
					<label> Name:
						<input type="text" value={this.state.name} onChange={this.handleChange} />
					</label>

					<label> Category:
						<input type="text" value={this.state.name} onChange={this.handleChange} />
					</label>

					<label> Type:
						<input type="text" value={this.state.name} onChange={this.handleChange} />
					</label>

					<label> Special:
						<input type="text" value={this.state.name} onChange={this.handleChange} />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Form;