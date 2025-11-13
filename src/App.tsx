import { useContext } from "react";
import "./App.css";
import FilterButton from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import ToDosList from "./components/TodosList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<main
				className={`max-w-[85rem] mx-auto ${
					theme === "light" ? "light" : "dark"
				}`}>
				<header>
					<div>Todo App (Context API)</div>
					<div>
						<ThemeToggleButton />
					</div>
				</header>
				<TodoInput />
				<FilterButton />
				<ToDosList />
			</main>
		</>
	);
}

export default App;
