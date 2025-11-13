import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import TodoItem from "./TodoItem";

export default function ToDosList() {
	const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);
	const { filter } = useContext(FilterContext);
	const [activeTodo, setActiveTodo] = useState(0);
	// for editing one todo per time
	const [editingId, setEditingId] = useState<string | null>(null);

	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	//keep track of active todos
	useEffect(() => {
		const todoNumber = todos.filter((todo) => !todo.completed);
		console.log(todoNumber.length, todoNumber);
		setActiveTodo(todoNumber.length);
	}, [todos]);

	return (
		<div>
			{filteredTodos.length === 0 ? (
				<p className="p-10 text-center"> No todos yet! Add one above.</p>
			) : (
				filteredTodos.map((todo) => (
					<div key={todo.id}>
						<TodoItem
							todo={todo}
							isEditing={editingId === todo.id}
							setEditingId={setEditingId}
						/>
					</div>
				))
			)}
			{activeTodo !== 0 && (
				<div className="p-4 py-2">
					{activeTodo} item{activeTodo > 1 && "s"} left
				</div>
			)}
		</div>
	);
}
