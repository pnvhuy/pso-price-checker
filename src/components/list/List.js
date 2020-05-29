import React, { Component } from 'react';

// interface Props {
// 	// foo: number;
// }

// interface State {
// 	// foo: number;
// }

// class List extends Component{





//   	public render() {


// 		return (
// 			<div className="cm-list">
// 				<div>
// 					<p>This is my list</p>
// 					<button onClick={() => {
// 						this.getStuff();
// 					}}></button>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default List;


// import React, { Component } from 'react';

	

class List extends Component {

		constructor(props) {

		super(props);

		this.state = {
			foo: [3],
		}
	}

	
	getList() {
		fetch('http://ec2-54-201-217-62.us-west-2.compute.amazonaws.com:4200/foos')
			.then(response => response.json())
			.then(data => {
				console.log('data', data);
				this.setState({
					foo: data.map(dat => dat.name)
				})
			});
	}

  	render() {


		const { foo } = this.state;

		return (
			<div className="cm-list">
				<div>
					<p>This is my list</p>

					<button onClick={() => {
						this.getList();
					}}></button>

					<ul>
					{foo.map((boo, i) => {
						return (
							<li key={i}>{boo}</li>
						)
					})}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;