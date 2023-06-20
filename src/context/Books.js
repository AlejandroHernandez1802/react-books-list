import { createContext, useState, useCallback } from "react";

/*External libreries imports*/
import axios from "axios";

/*Context creation*/
const BooksContext = createContext();

function MainProvider({ children }) {
	/*States declaration*/
	const [books, setBooks] = useState([]);

	/*Mounted functions - declaration*/
	const getBooks = useCallback(async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	}, []);

	/*Books state handler methods*/
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

	/*Exporting data declaration*/
	const valuesToShare = {
		books,
		getBooks,
		createBook,
		onEditBook,
		deleteBookById,
	};

	return (
		<BooksContext.Provider value={valuesToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { MainProvider };
export default BooksContext;
