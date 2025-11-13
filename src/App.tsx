import "./App.css";
import FilterButton from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import ToDosList from "./components/TodosList";

function App() {
	return (
		<>
			<main>
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
