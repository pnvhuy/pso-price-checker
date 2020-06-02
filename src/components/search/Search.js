import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			hit: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeHit = this.handleChangeHit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
 
	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleChangeHit(event) {
		this.setState({
			hit: event.target.value
		});
	}

	handleSubmit(event) {
		const { name, hit } = this.state;
		this.props.methods.updateSearch(name, hit);
		event.preventDefault();
	}

	render() {
		// const { itemTypes, itemSpecials, itemBaseList, itemList } = this.props.data;

		return (
			<div style={{
			
			}}>
				<div className="cm-form" style={{
					padding: '60px 20px 20px',
				}}>
					<div>
						<h3>Search</h3>
					</div>
					<form>
						<input type="text" name="search-name" id="search-name" value={this.state.name} onChange={this.handleChange} />

						{/* <label> Hit:
							<input type="number" name="search-hit" id="search-hit" value={this.state.hit} onChange={this.handleChangeHit} />
						</label> */}

						<input type="button" value="Go!" onClick={this.handleSubmit} />
					</form>
				</div>
			</div>

		);
	}
}

export default Search;