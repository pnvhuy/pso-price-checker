import React, { Component } from 'react';

// interface Props {
// 	// foo: number;
// }

// interface State {
// 	// foo: number;
// }

// class List extends Component{

// 	constructor(props) {

// 		super(props);

// 		this.state = {
// 			foo: 1,
// 		}
// 	}



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

	function getStuff() {
		fetch('http://localhost:4200/users')
			.then(response => response.json())
			.then(data => console.log(data));
	}

class List extends Component {

  	render() {
		return (
			<div className="cm-list">
				<div>
					<p>This is my list</p>

					<button onClick={() => {
						getStuff();
					}}></button>
				</div>
			</div>
		);
	}
}

export default List;