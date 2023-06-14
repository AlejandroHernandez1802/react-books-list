/*States import*/
import { useState } from "react";

function EditBook({ book, onEditBook }) {
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
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={titleEdited} onChange={handleInput}></input>
		</form>
	);
}

export default EditBook;
