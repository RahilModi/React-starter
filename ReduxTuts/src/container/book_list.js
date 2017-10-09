import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

import {bindActionCreators } from 'redux';

class BookList extends Component{
	renderList(){
		return(
			this.props.books.map((book) => {
				return (
					<li 
						key = {book.title} 
						className = "list-group-item"
						onClick = {() => this.props.selectedBook(book)} > {book.title} </li>
				);
		}));
	}

	render(){
		return(
			<ul className = "list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//return will show as this.props inside BookList;
function mapStatetoProps(state){

	return {
		books: state.books
	};
}

//whenever book selection action performs selected book will be passed to all of our reducers
// whatever returns from the function is available as prop on BookList container
function mapDispatchToProps(dispatch){

	return bindActionCreators({
		selectedBook: selectBook
	}, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(BookList);