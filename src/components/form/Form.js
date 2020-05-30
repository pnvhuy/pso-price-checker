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

			item_base: '',
			item_special: '',
			item_native: '',
			item_altered_beast: '',
			item_machine: '',
			item_dark: '',
			item_hit: '',
			item_dfp: '',
			item_evp: '',

			price_item: '',
			price_type: 'BUY',
			price_value: '',
			price_complete: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeCategory = this.handleChangeCategory.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);
		this.handleChangeSpecial = this.handleChangeSpecial.bind(this);

		this.handleChangeItemBase = this.handleChangeItemBase.bind(this);
		this.handleChangeItemSpecial = this.handleChangeItemSpecial.bind(this);
		this.handleChangeItemNative = this.handleChangeItemNative.bind(this);
		this.handleChangeItemAlteredBeast = this.handleChangeItemAlteredBeast.bind(this);
		this.handleChangeItemMachine = this.handleChangeItemMachine.bind(this);
		this.handleChangeItemDark = this.handleChangeItemDark.bind(this);
		this.handleChangeItemHit = this.handleChangeItemHit.bind(this);
		this.handleChangeItemDfp = this.handleChangeItemDfp.bind(this);
		this.handleChangeItemEvp = this.handleChangeItemEvp.bind(this);

		this.handleChangePriceItem = this.handleChangePriceItem.bind(this);
		this.handleChangePriceType = this.handleChangePriceType.bind(this);
		this.handleChangePriceValue = this.handleChangePriceValue.bind(this);
		this.handleChangePriceComplete = this.handleChangePriceComplete.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
		this.handleSubmit3 = this.handleSubmit3.bind(this);
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

	/////

	handleChangeItemBase(event) {
		this.setState({
			item_base: event.target.value
		});
	}

	handleChangeItemSpecial(event) {
		this.setState({
			item_special: event.target.value
		});
	}

	handleChangeItemNative(event) {
		this.setState({
			item_native: event.target.value
		});
	}

	handleChangeItemAlteredBeast(event) {
		this.setState({
			item_altered_beast: event.target.value
		});
	}

	handleChangeItemMachine(event) {
		this.setState({
			item_machine: event.target.value
		});
	}

	handleChangeItemDark(event) {
		this.setState({
			item_dark: event.target.value
		});
	}

	handleChangeItemHit(event) {
		this.setState({
			item_hit: event.target.value
		});
	}

	handleChangeItemDfp(event) {
		this.setState({
			item_dfp: event.target.value
		});
	}

	handleChangeItemEvp(event) {
		this.setState({
			item_evp: event.target.value
		});
	}

	handleSubmit2(event) {
		fetch(`${dbUrl}/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				item_base: this.state.item_base,
				item_special: this.state.item_special,
				item_native: this.state.item_native,
				item_altered_beast: this.state.item_altered_beast,
				item_machine: this.state.item_machine,
				item_dark: this.state.item_dark,
				item_hit: this.state.item_hit,
				item_dfp: this.state.item_dfp,
				item_evp: this.state.item_evp,
			}),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updateItemList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		event.preventDefault();

		return false;
	}

	/////

	handleChangePriceItem(event) {
		this.setState({
			price_item: event.target.value
		});
	}

	handleChangePriceType(event) {
		this.setState({
			price_type: event.target.value
		});
	}


	handleChangePriceValue(event) {
		this.setState({
			price_value: event.target.value
		});
	}

	handleChangePriceComplete(event) {
		this.setState({
			price_complete: event.target.checked
		});
	}

	handleSubmit3(event) {
		fetch(`${dbUrl}/prices`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				price_item: this.state.price_item,
				price_type: this.state.price_type,
				price_value: this.state.price_value,
				price_complete: this.state.price_complete,
			}),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updatePriceList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		event.preventDefault();

		return false;
	}

	render() {
		const { itemTypes, itemSpecials, itemBaseList, itemList } = this.props.data;

		return (
			<React.Fragment>
				<div className="cm-form">
					<div>
						<h3>Create Base Item</h3>
					</div>
					<form>
						<label> Name:
							<input type="text" name="item-base-name" id="item-base-name" value={this.state.name} onChange={this.handleChange} />
						</label>

						<label> Category:
						<select name="item-category" id="item-category" onChange={this.handleChangeCategory}>
								{itemCategories.map((itemCategory, i) => (
									<option key={i} value={itemCategory}>{itemCategory}</option>
								))}
							</select>
						</label>

						<label> Type:
							<select name="item-base-type" id="item-base-type" onChange={this.handleChangeType}>
								<option value={null}>{'None'}</option>

								{itemTypes.map((itemType, i) => (
									<option key={i} value={itemType.id}>{itemType.name}</option>
								))}
							</select>
						</label>


						<label> Special:
							<select name="item-base-special" id="item-base-special" onChange={this.handleChangeSpecial}>
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
						<h3>Create Item</h3>
					</div>
					<form>
						<label> Base Item:
							<select name="item-base" id="item-base" onChange={this.handleChangeItemBase}>
								{itemBaseList.map((baseItem, i) => (
									<option key={i} value={baseItem.id}>{baseItem.name}</option>
								))}
							</select>
						</label>
						
						<label> Special:
							<input type="text" name="item-special" id="item-special" value={this.state.value} onChange={this.handleChangeItemSpecial} />
						</label>

						<label> Native:
							<input type="text" name="item-native" id="item-native" value={this.state.value} onChange={this.handleChangeItemNative} />
						</label>

						<label> Altered Beast:
							<input type="text" name="item-altered-beast" id="item-altered-beast" value={this.state.value} onChange={this.handleChangeItemAlteredBeast} />
						</label>

						<label> Machine:
							<input type="text" name="item-machine" id="item-machine" value={this.state.value} onChange={this.handleChangeItemMachine} />
						</label>

						<label> Dark:
							<input type="text" name="item-dark" id="item-dark" value={this.state.value} onChange={this.handleChangeItemDark} />
						</label>

						<label> Hit:
							<input type="text" name="item-hit" id="item-hit" value={this.state.value} onChange={this.handleChangeItemHit} />
						</label>

						<label> DFP:
							<input type="text" name="item-dfp" id="item-dfp" value={this.state.value} onChange={this.handleChangeItemDfp} />
						</label>
						
						<label> EVP:
							<input type="text" name="item-evp" id="item-evp" value={this.state.value} onChange={this.handleChangeItemEvp} />
						</label>

						<input type="button" value="Submit" onClick={this.handleSubmit2} />
					</form>
				</div>

				<div className="cm-form3">
					<div>
						<h3>Create Price</h3>
					</div>
					<form>
						<label> Base Item:
							<select name="price-item" id="price-item" onChange={this.handleChangePriceItem}>
								{itemList.map((item, i) => (
									<option key={i} value={item.id}>{item.name}</option>
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

						<input type="button" value="Submit" onClick={this.handleSubmit3} />
					</form>
				</div>
			</React.Fragment>

		);
	}
}

export default Form;