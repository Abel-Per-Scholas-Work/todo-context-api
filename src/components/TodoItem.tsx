import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
	const [editMode, setEditMode] = useState(false);
	const [todoText, setTodoText] = useState(todo.text);

	const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//if todo text is empty
		if (!todoText) {
			setEditMode(false);
			return;
		}
		editTodo(todo.id, todoText);
		setEditMode(false);
		console.log(todoText);
	};

	const handleEdit = () => {
		setEditMode(!editMode);
	};

	return (
		<>
			{!editMode ? (
				<div>
					<input
						type="checkbox"
						name={todo.text}
						checked={todo.completed}
						onChange={() => toggleTodo(todo.id)}
					/>
					{todo.text}
					<div>
						<button onClick={handleEdit}>✏️</button>
						<button onClick={() => deleteTodo(todo.id)}>🗑️</button>
					</div>
				</div>
			) : (
				<div>
					<div>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={todoText}
								name="todoText"
								onChange={(e) => setTodoText(e.target.value)}
							/>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
