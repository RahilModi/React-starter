export function selectBook(book){
	console.log(`A book has been selected : ${book.title}`);

	//selectBook is an action creator

	return{
		type: 'BOOK_SELECTED',
		payload: book
	};
}