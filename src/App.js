/*Hooks imports*/
import { useState, useEffect } from "react";

/*Axios import*/
import axios from "axios";

/*Styles import*/
import "./assets/App.css";

/*Components imports */
import CreateBookForm from "./components/CreateBookForm";
import BooksList from "./components/BooksList";

function App() {
	/*States declaration*/
	const [books, setBooks] = useState([]);

	/*Mounted functions - declaration*/
	const getBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	};

	/*Mounted functions - call*/
	useEffect(() => {
		getBooks();
	}, []);

	/*States handlers methods */
	const createBook = async (title) => {
		//Axios usage
		const response = await axios.post("http://localhost:3001/books", { title });

		//Local usage
		const booksArray = [...books, response.data];
		setBooks(booksArray);
	};

	const deleteBookById = async (id) => {
		//Axios usage
		await axios.delete(`http://localhost:3001/books/${id}`);

		//Local usage
		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	const onEditBook = async (bookToEdit) => {
		//Axios usage
		const response = await axios.put(
			`http://localhost:3001/books/${bookToEdit.id}`,
			bookToEdit
		);
		const updatedBooks = books.map((book) => {
			if (book.id === bookToEdit.id) {
				return { ...book, title: response.data.title };
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
