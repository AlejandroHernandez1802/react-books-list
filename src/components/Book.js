/*Styles import*/
import "../assets/components/Book.css";

/*Hooks imports*/
import { useState } from "react";
import UseBooksContext from "../hooks/UseBooksContext";

/*Components imports*/
import EditBook from "./EditBook";

function Book({ book }) {
	/*Context data declaration*/
	const { deleteBookById } = UseBooksContext();

	/*States declaration*/
	const [showEdit, setEdit] = useState(false);

	/*Buttons handlers*/
	const handleDeleteClick = () => {
		deleteBookById(book.id);
	};

	const handlEditClick = () => {
		setEdit(!showEdit);
	};

	/*Edit book handler*/
	const editBook = () => {
		setEdit(false);
	};

	/*Book content declaration*/
	let bookContent = <span>{book.title}</span>;
	if (showEdit) bookContent = <EditBook book={book} editBook={editBook} />;

	return (
		<div className="book-container">
			<button onClick={handleDeleteClick}>Delete book</button>
			<button onClick={handlEditClick}>Edit book</button>
			<div>{bookContent}</div>
		</div>
	);
}
export default Book;
