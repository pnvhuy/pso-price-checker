import React, { Component } from 'react';

class List extends Component {

		constructor(props) {

		super(props);

		this.state = {
		}
	}

  	render() {
		const { itemBaseList, itemList, priceList } = this.props.data;

		const validItemBaseList = itemBaseList ? itemBaseList : [];
		const validItemList = itemList ? itemList : [];
		const validPriceList = priceList ? priceList : [];

		return (
			<React.Fragment>
				<div className="cm-item-base-list">
					<div>
						<h3>Base Item List</h3>

						<button onClick={() => {
						}}></button>

						<table >
							<thead>
								<tr>
									<th>Name</th>
									<th>Category</th>
									<th>Type</th>
									<th>Special</th>
								</tr>
							</thead>
							<tbody>
								{validItemBaseList.map((baseItem, i) => {
									return (
										<tr key={i} >
											<td>{baseItem.name}</td>
											<td>{baseItem.category}</td>
											<td>{baseItem.type_name}</td>
											<td>{baseItem.special_name}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>

				<div className="cm-item-list">
					<div>
						<h3>Item List</h3>

						<table>
							<thead>
								<tr>
									<th>Item Base</th>
									<th>Special</th>
									<th>Native</th>
									<th>Altered Beast</th>
									<th>Machine</th>
									<th>Dark</th>
									<th>Hit</th>
									<th>DFP</th>
									<th>EVP</th>
								</tr>
							</thead>
							<tbody>
								{validItemList.map((item, i) => {
									return (
										<tr key={i} >
											<td>{item.base_name}</td>
											<td>{item.base_special_name} {item.special_name}</td>
											<td>{item.native}</td>
											<td>{item.altered_beast}</td>
											<td>{item.native}</td>
											<td>{item.machine}</td>
											<td>{item.dark}</td>
											<td>{item.hit}</td>
											<td>{item.dfp}</td>
											<td>{item.evp}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>

				<div className="cm-price-list">
					<div>
						<h3>Price List</h3>

						<table>
							<thead>
								<tr>
									<th>Item</th>
									<th>Type</th>
									<th>PD</th>
									<th>Complete</th>
									<th>Created</th>
									<th>Updated</th>
								</tr>
							</thead>
							<tbody>
								{validPriceList.map((price, i) => {
									return (
										<tr key={i} >
											<td>{price.item_base_name}</td>
											<td>{price.type}</td>
											<td>{price.value}</td>
											<td>{price.is_complete}</td>
											<td>{price.created_on}</td>
											<td>{price.updated_on}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default List;