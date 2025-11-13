import { useContext, type FormEvent } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import TodoItem from "./TodoItem";

export default function ToDosList() {
	const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);
	const { filter } = useContext(FilterContext);

	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
		e.preventDefault();
		const target = e.target as HTMLInputElement;
		console.log(target.name, target.value, "and id is", id);
	};

	return (
		<div>
			<h2>Todos List</h2>
			<div>Filter: {filter}</div>
			{filteredTodos.length === 0 ? (
				<p> No todos yet! Add one above.</p>
			) : (
				filteredTodos.map((todo) => (
					<div key={todo.id}>
						<TodoItem todo={todo} />
					</div>
				))
			)}
		</div>
	);
}
