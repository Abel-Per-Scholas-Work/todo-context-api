import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";
import { FilterProvider } from "./context/FilterContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<TodoProvider>
				<FilterProvider>
					<App />
				</FilterProvider>
			</TodoProvider>
		</ThemeProvider>
	</StrictMode>
);
