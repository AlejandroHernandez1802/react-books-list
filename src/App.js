/*Hooks imports*/
import { useState } from "react";

/*Styles import*/
import "./assets/App.css";

/*Components imports */
import CreateBookForm from "./components/CreateBookForm";
import BooksList from "./components/BooksList";

function App() {
	/*States declaration*/
	const [books, setBooks] = useState([]);

	/*States handlers methods */
	const createBook = (title) => {
		const booksArray = [
			...books,
			{ id: Math.round(Math.random() * 999999), title },
		];
		setBooks(booksArray);
	};

	const deleteBookById = (id) => {
		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	const onEditBook = (bookToEdit) => {
		const updatedBooks = books.map((book) => {
			if (book.id === bookToEdit.id) {
				return { ...book, title: bookToEdit.title };
			}
			return book;
		});

		setBooks(updatedBooks);
	};

	return (
		<div>
			<div className="book-list__container">
				<BooksList
					booksList={books}
					onDelete={deleteBookById}
					onEdit={onEditBook}
				/>
			</div>
			<div className="create-book__container">
				<CreateBookForm onCreate={createBook} />
			</div>
		</div>
	);
}

export default App;
