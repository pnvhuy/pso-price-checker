import React, { Component } from 'react';

// interface Props {
// 	// foo: number;
// }

// interface State {
// 	// foo: number;
// }

class List extends Component {

		constructor(props) {

		super(props);

		this.state = {
		}
	}

  	render() {
		// const { foo } = this.state;
		const { itemBaseList } = this.props.data;

		const list = itemBaseList ? itemBaseList : [];

		return (
			<div className="cm-list">
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
								{list.map((baseItem, i) => {
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
		);
	}
}

export default List;