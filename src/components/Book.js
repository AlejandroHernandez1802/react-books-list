/*Styles import*/
import "../assets/components/Book.css";

/*States imports*/
import { useState } from "react";

/*Components imports*/
import EditBook from "./EditBook";

function Book({ book, onDelete, onEdit }) {
	/*States declaration*/
	const [showEdit, setEdit] = useState(false);

	/*Buttons handlers*/
	const handleDeleteClick = () => {
		onDelete(book.id);
	};

	const handlEditClick = () => {
		setEdit(!showEdit);
	};

	/*Edit book handler*/
	const onEditBook = (book) => {
		onEdit(book);
		setEdit(false);
	};

	/*Book content declaration*/
	let bookContent = <span>{book.title}</span>;
	if (showEdit) bookContent = <EditBook book={book} onEditBook={onEditBook} />;

	return (
		<div className="book-container">
			<button onClick={handleDeleteClick}>Delete book</button>
			<button onClick={handlEditClick}>Edit book</button>
			<div>{bookContent}</div>
		</div>
	);
}
export default Book;
