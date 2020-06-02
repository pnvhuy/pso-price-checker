import React, { Component } from 'react';

import { lowerCase, startCase } from 'lodash';

const dbUrl = "http://ec2-54-201-217-62.us-west-2.compute.amazonaws.com:4200";


function isNumber(n) { //includes strings that are numbers 
	return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function formatDate(dateString) {
	const d = new Date(dateString);
	const ye = String(d.getFullYear()).slice(-2);
	const mo = d.getMonth();
	const da = d.getDate();

	return `${mo}/${da}/${ye}`;
}

function formatNumber(value) {
	if(isNumber(value)) {
		return String(value);
	} else {
		return '-';
	}
}

function formatEnum(enumerable) {
	return startCase(lowerCase(enumerable));
}

function formatPriceStats(price) {
	if(price.item_category === 'WEAPON') {
		let stats = '';

		// Add special if has one
		if(price.item_special_name) {
			stats += `[${price.item_special_name}] `;
		}
		
		// Add % attributes if has any
		if(
			isNumber(price.item_native) || 
			isNumber(price.item_altered_beast) ||
			isNumber(price.item_machine) ||
			isNumber(price.item_dark)
		) {
			const item_native = price.item_native ? price.item_native : 0;
			const item_altered_beast = price.item_altered_beast ? price.item_altered_beast : 0;
			const item_machine = price.item_machine ? price.item_machine : 0;
			const item_dark = price.item_dark ? price.item_dark : 0;
			const item_hit = price.item_hit ? price.item_hit : 0;
			stats += `[${item_native}/${item_altered_beast}/${item_machine}/${item_dark}|${item_hit}]`;
		} else if(isNumber(price.item_hit)) {
			// If doesn't have attributes but has hit
			stats += `${price.item_hit}h`;
		}

		return stats;
	}
}

class List extends Component {

		constructor(props) {

		super(props);

		this.state = {
		}

		this.deletePrice = this.deletePrice.bind(this);
	}

	deleteItemBase(id) {
		fetch(`${dbUrl}/items-base/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updateItemBaseList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	deleteItem(id) {
		fetch(`${dbUrl}/items/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updateItemList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	deletePrice(id) {
		fetch(`${dbUrl}/prices/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.props.methods.updatePriceList();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

  	render() {
		const { itemBaseList, itemList, priceList } = this.props.data;

		const validItemBaseList = itemBaseList ? itemBaseList : [];
		const validItemList = itemList ? itemList : [];
		const validPriceList = priceList ? priceList : [];

		return (
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center'
			}}>

				<hr
					style={{
						backgroundColor: 'light-grey',
						height: 1,
						width: '100%',
						marginTop: '60px',
						marginBottom: '20px'
					}}
				/>

				<div className="cm-price-list">
					<div>
						<h3>Price List</h3>

						<div style={{
							display: 'flex',
							justifyContent: 'center'
						}}>
							<table>
								<thead>
									<tr>
										<th>Item</th>
										<th>Type</th>
										<th>PD</th>
										<th>Complete</th>
										{/* <th>Created</th> */}
										<th>Updated</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{validPriceList.map((price, i) => {
										return (
											<tr key={i} >
												<td>{price.item_base_name} {formatPriceStats(price)}</td>
												<td>{formatEnum(price.type)}</td>
												<td>{price.value}</td>
												<td>{Boolean(price.is_complete) ? '✓' : '-'}</td>
												{/* <td>{formatDate(price.created_on)}</td> */}
												<td>{formatDate(price.updated_on)}</td>
												<td>
													<a href onClick={(event) => {
														this.deletePrice(price.id)
													}}>X</a>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
				<hr
					style={{
						backgroundColor: 'light-grey',
						height: 1,
						width: '100%',
						marginTop: '60px',
						marginBottom: '20px'
					}}
				/>

				<div style={{
					display: 'flex',
					justifyContent: 'space-around'
				}}>
					<div className="cm-item-base-list">
						<div>
							<h3>Base Item List</h3>

							<div style={{
								display: 'flex',
								justifyContent: 'center'
							}}>
								<table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Category</th>
											<th>Type</th>
											<th>Special</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{validItemBaseList.map((baseItem, i) => {
											return (
												<tr key={i} >
													<td>{baseItem.name}</td>
													<td>{formatEnum(baseItem.category)}</td>
													<td>{baseItem.type_name ? baseItem.type_name : '-'}</td>
													<td>{baseItem.special_name ? formatEnum(baseItem.special_name) : '-'}</td>
													<td>
														<a href onClick={(event) => {
															this.deleteItemBase(baseItem.id)
														}}>X</a>
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="cm-item-list">
						<div>
							<h3>Item List</h3>

							<div style={{
								display: 'flex',
								justifyContent: 'center'
							}}>
								<table>
									<thead>
										<tr>
											<th>Item Base</th>
											<th>Special</th>
											<th>N</th>
											<th>AB</th>
											<th>M</th>
											<th>D</th>
											<th>Hit</th>
											<th>DFP</th>
											<th>EVP</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{validItemList.map((item, i) => {
											return (
												<tr key={i} >
													<td>{item.base_name}</td>
													<td>{item.special_name ? item.special_name : item.base_special_name ? formatEnum(item.base_special_name) : '-'}</td>
													<td>{formatNumber(item.native)}</td>
													<td>{formatNumber(item.altered_beast)}</td>
													<td>{formatNumber(item.machine)}</td>
													<td>{formatNumber(item.dark)}</td>
													<td>{formatNumber(item.hit)}</td>
													<td>{formatNumber(item.dfp)}</td>
													<td>{formatNumber(item.evp)}</td>
													<td>
														<a href onClick={(event) => {
															this.deleteItem(item.id)
														}}>X</a>
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default List;