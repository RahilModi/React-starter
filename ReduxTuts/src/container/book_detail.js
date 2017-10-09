import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{

	render(){
		if(!this.props.book){
			return <div> Select a book to get started.</div>;
		}
		return(	
			<div>
			<h3>Detail of : </h3>
			<div>Book Title : {this.props.book.title} </div>
			<div>Author : {this.props.book.author} </div>
			</div>
		);
	}
}

//return will show as this.props inside BookList;
function mapStatetoProps(state){

	return {
		book: state.activebook
	};
}

export default connect(mapStatetoProps)(BookDetail);