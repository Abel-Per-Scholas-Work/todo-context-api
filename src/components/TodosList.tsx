import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";

export default function ToDosList() {
	const { todos } = useContext(TodoContext);
	const { filter } = useContext(FilterContext);

	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	return (
		<div>
			<h2>Todos List</h2>
			<div>Filter: {filter}</div>
			{filteredTodos.map((todo) => (
				<li key={todo.id}>{todo.text}</li>
			))}
		</div>
	);
}
