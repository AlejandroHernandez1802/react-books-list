/*Hooks imports*/
import { useState } from "react";
import UseBooksContext from "../hooks/UseBooksContext";

/*Style imports*/
import "../assets/components/CreateBookForm.css";

function CreateBookForm() {
	/*Context data declaration */
	const { createBook } = UseBooksContext();

	/*States declaration*/
	const [title, setTitle] = useState("");

	/*States handlers methods */
	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle("");
	};

	return (
		<div className="create-book__form">
			<span className="form__title">Add a book</span>
			<form className="form" onSubmit={handleSubmit}>
				<label>Book title</label>
				<input value={title} onChange={handleChange} />
				<button className="form__submit">Create book</button>
			</form>
		</div>
	);
}

export default CreateBookForm;
