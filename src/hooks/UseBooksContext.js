import { useContext } from "react";
import BooksContext from "../context/Books";

function UseBooksContext() {
	return useContext(BooksContext);
}

export default UseBooksContext;
