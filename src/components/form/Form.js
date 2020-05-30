import React, { Component } from 'react';

const dbUrl = "http://ec2-54-201-217-62.us-west-2.compute.amazonaws.com:4200";

const itemCategories = ['WEAPON', 'FRAME', 'BARRIER', 'UNIT', 'MAG', 'TECHNIQUE', 'TOOL'];
const priceTypes = ['BUY', 'SELL', 'AUCTION', 'PRICE_CHECK', 'MANUAL'];

class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			category: 'WEAPON',  //default
			type_id: 'BUY',
			special_id: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeCategory = this.handleChangeCategory.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);
		this.handleChangeSpecial = this.handleChangeSpecial.bind(this);

		this.handleChangePriceItem = this.handleChangePriceItem.bind(this);
		this.handleChangePriceType = this.handleChangePriceType.bind(this);
		this.handleChangePriceValue = this.handleChangePriceValue.bind(this);
		this.handleChangePriceComplete = this.handleChangePriceComplete.bind(this);


		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleChangeCategory(event) {
		this.setState({
			category: event.target.value
		});
	}

	handleChangeType(event) {
		this.setState({
			type_id: event.target.value
		});
	}

	handleChangeSpecial(event) {
		this.setState({
			special_id: event.target.value
		});
	}

	handleSubmit(event) {
		fetch(`${dbUrl}/items-base`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				category: this.state.category,
				type_id: this.state.type_id,
				special_id: this.state.special_id,
			}),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updateList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		event.preventDefault();

		return false;
	}


	handleChangePriceItem(event) {
		this.setState({
			special_id: event.target.value
		});
	}


	handleChangePriceType(event) {
		this.setState({
			special_id: event.target.value
		});
	}


	handleChangePriceValue(event) {
		this.setState({
			special_id: event.target.value
		});
	}

	handleChangePriceComplete(event) {
		this.setState({
			special_id: event.target.checked
		});
	}

	handleSubmit2(event) {
		fetch(`${dbUrl}/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				// name: this.state.name,
				// category: this.state.category,
				// type_id: this.state.type_id,
				// special_id: this.state.special_id,
			}),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updateList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		event.preventDefault();

		return false;
	}

	render() {
		const { itemTypes, itemSpecials, itemBaseList } = this.props.data;

		return (
			<React.Fragment>
				<div className="cm-form">
					<div>
						<h3>Create Base Item</h3>
					</div>
					<form>
						<label> Name:
						<input type="text" name="item-name" id="item-name" value={this.state.name} onChange={this.handleChange} />
						</label>

						<label> Category:
						<select name="item-category" id="item-category" onChange={this.handleChangeCategory}>
								{itemCategories.map((itemCategory, i) => (
									<option key={i} value={itemCategory}>{itemCategory}</option>
								))}
							</select>
						</label>

						<label> Type:
						<select name="item-type" id="item-type" onChange={this.handleChangeType}>
								<option value={null}>{'None'}</option>

								{itemTypes.map((itemType, i) => (
									<option key={i} value={itemType.id}>{itemType.name}</option>
								))}
							</select>
						</label>


						<label> Special:
						<select name="item-special" id="item-special" onChange={this.handleChangeSpecial}>
								<option value={null}>{'None'}</option>

								{itemSpecials.map((itemSpecial, i) => (
									<option key={i} value={itemSpecial.id}>{itemSpecial.name}</option>
								))}
							</select>
						</label>

						<input type="button" value="Submit" onClick={this.handleSubmit} />
					</form>
				</div>
				<div className="cm-form2">
					<div>
						<h3>Create Price</h3>
					</div>
					<form>
						<label> Base Item:
							<select name="price-item" id="price-item" onChange={this.handleChangePriceItem}>
								{itemBaseList.map((baseItem, i) => (
									<option key={i} value={baseItem.id}>{baseItem.name}</option>
								))}
							</select>
						</label>
						
						<label> PD:
							<input type="text" name="price-value" id="price-value" value={this.state.value} onChange={this.handleChangePriceValue} />
						</label>
						

						<label> Price Type:
						<select name="price-type" id="price-type" onChange={this.handleChangePriceType}>
								{priceTypes.map((priceType, i) => (
									<option key={i} value={priceType}>{priceType}</option>
								))}
							</select>
						</label>


						<label> Complete:
							<input type="checkbox" id="price-complete" name="price-complete" onChange={this.handleChangePriceComplete }/>
						</label>

						<input type="button" value="Submit" onClick={this.handleSubmit2} />
					</form>
				</div>
			</React.Fragment>

		);
	}
}

export default Form;