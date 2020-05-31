import React, { Component } from 'react';

function formatDate(dateString) {
	const d = new Date(dateString);
	const ye = String(d.getFullYear()).slice(-2);
	const mo = d.getMonth();
	const da = d.getDate();

	return `${mo}/${da}/${ye}`;
}

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
									</tr>
								</thead>
								<tbody>
									{validPriceList.map((price, i) => {
										return (
											<tr key={i} >
												<td>{price.item_base_name} {price.item_special_name ? `[${price.item_special_name}] ` : ''}[{price.item_native}/{price.item_altered_beast}/{price.item_machine}/{price.item_dark}|{price.item_hit}]</td>
												<td>{price.type}</td>
												<td>{price.value}</td>
												<td>{Boolean(price.is_complete) ? '✓' : '-'}</td>
												{/* <td>{formatDate(price.created_on)}</td> */}
												<td>{formatDate(price.updated_on)}</td>
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
											<th>Native</th>
											<th>A. Beast</th>
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
													<td>{item.special_name ? item.special_name : item.base_special_name ? item.base_special_name : '-'}</td>
													<td>{item.native ? item.native : '-'}</td>
													<td>{item.altered_beast ? item.altered_beast : '-'}</td>
													<td>{item.machine ? item.machine : '-'}</td>
													<td>{item.dark ? item.dark : '-'}</td>
													<td>{item.hit ? item.hit : '-'}</td>
													<td>{item.dfp ? item.dfp : '-'}</td>
													<td>{item.evp ? item.evp : '-'}</td>
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