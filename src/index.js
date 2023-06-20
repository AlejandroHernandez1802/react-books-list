import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*Contexts import*/
import { MainProvider } from "./context/Books";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div>
			<MainProvider>
				<App />
			</MainProvider>
		</div>
	</React.StrictMode>
);
