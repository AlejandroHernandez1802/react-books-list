/*Components imports */
import Book from "./Book";

/*Hooks imports*/
import UseBooksContext from "../hooks/UseBooksContext";

function BooksList() {
	/*Context data declaration*/
	const { books } = UseBooksContext();

	const bookRender = books.map((book) => {
		return <Book key={book.id} book={book} />;
	});

	return (
		<div>
			<div>{bookRender}</div>
		</div>
	);
}
export default BooksList;
