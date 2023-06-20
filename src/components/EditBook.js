/*Hooks import*/
import { useState } from "react";
import UseBooksContext from "../hooks/UseBooksContext";

function EditBook({ book, editBook }) {
	/*Context data declaration*/
	const { onEditBook } = UseBooksContext();

	/*States declaration*/
	const [titleEdited, setTitleEdited] = useState(book.title);

	/*Inputs handler*/
	const handleInput = (event) => {
		setTitleEdited(event.target.value);
	};

	/*Submit handler */
	const handleSubmit = (event) => {
		event.preventDefault();
		onEditBook({ id: book.id, title: titleEdited });
		editBook();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={titleEdited} onChange={handleInput}></input>
		</form>
	);
}

export default EditBook;
