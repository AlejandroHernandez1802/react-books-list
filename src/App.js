/*Hooks imports*/
import { useEffect } from "react";
import UseBooksContext from "./hooks/UseBooksContext";

/*Styles import*/
import "./assets/App.css";

/*Components imports */
import CreateBookForm from "./components/CreateBookForm";
import BooksList from "./components/BooksList";

function App() {
	/*Context declaration*/
	const { getBooks } = UseBooksContext();

	/*Mounted functions - call*/
	useEffect(() => {
		getBooks();
	}, [getBooks]);

	return (
		<div>
			<div className="book-list__container">
				<BooksList />
			</div>
			<div className="create-book__container">
				<CreateBookForm />
			</div>
		</div>
	);
}

export default App;
