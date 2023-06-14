/*Components improts */
import Book from "./Book";

function BooksList({ booksList, onDelete, onEdit }) {
	const bookRender = booksList.map((book) => {
		return (
			<Book key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
		);
	});

	return (
		<div>
			<div>{bookRender}</div>
		</div>
	);
}
export default BooksList;
