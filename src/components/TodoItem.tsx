import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo, isEditing, setEditingId }) {
	// const [editMode, setEditMode] = useState(false);
	const [todoText, setTodoText] = useState(todo.text);

	const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//if todo text is empty
		if (!todoText) {
			setEditingId(false);
			return;
		}
		editTodo(todo.id, todoText);
		setEditingId(false);
		console.log(todoText);
	};

	const handleEdit = () => {
		setEditingId(todo.id);
	};

	return (
		<div id="todoList">
			{!isEditing ? (
				<div className=" p-4 flex justify-between border-b-1">
					<div className="flex gap-x-2">
						<input
							type="checkbox"
							name={todo.text}
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
							// onBlur={() => setEditingId(null)}
						/>
						{todo.text}
					</div>
					<div className="flex gap-x-4">
						<button onClick={handleEdit}>✏️</button>
						<button onClick={() => deleteTodo(todo.id)}>🗑️</button>
					</div>
				</div>
			) : (
				<div>
					<div className=" p-4 flex justify-between border-b-1">
						<form onSubmit={handleSubmit} className="w-full">
							<input
								type="text"
								value={todoText}
								name="todoText"
								onChange={(e) => setTodoText(e.target.value)}
								className="focus:border-blue-600 w-full border-1 p-2 border-gray-400"
							/>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
