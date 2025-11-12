import "./App.css";
import FilterButton from "./components/FilterButton";
import TodoInput from "./components/TodoInput";
import ToDosList from "./components/TodosList";

function App() {
	return (
		<>
			<TodoInput />
			<FilterButton />
			<ToDosList />
		</>
	);
}

export default App;
