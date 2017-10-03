import React, { Component } from 'react';

//class based component - state is only supported in class based component
class SearchBar extends Component{
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return(
			<div>
		 		<input onChange = { event =>  this.setState({ term: event.target.value }) } />
		 	</div>
		);
	}
}

//functional component
// const SearchBar = () => {
// 	return <input />
// };

export default SearchBar;