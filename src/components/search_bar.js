import React, { Component } from 'react';

//class based component - state is only supported in class based component
class SearchBar extends Component{
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return(
			<div className = "search-bar">
		 		<input
		 			value = {this.state.term}
		 		 	onChange = { event =>  this.onInputChange(event.target.value) } />
		 	</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;