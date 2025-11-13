import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";

export default function ToDosList() {
	const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);
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
			{filteredTodos.length === 0 ? (
				<p> No todos yet! Add one above.</p>
			) : (
				filteredTodos.map((todo) => (
					<div key={todo.id}>
						<p>
							<input
								type="checkbox"
								name={todo.text}
								checked={todo.completed}
								onChange={() => toggleTodo(todo.id)}
							/>
							{todo.text}
							<div>
								<button onClick={() => console.log("edit")}>✏️</button>
								<button onClick={() => deleteTodo(todo.id)}>🗑️</button>
							</div>
						</p>
					</div>
				))
			)}
		</div>
	);
}
