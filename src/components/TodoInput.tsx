import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoInput() {
	const { addTodo } = useContext(TodoContext);
	const [text, setText] = useState("");
	const [errortext, setErrorText] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!text) {
			setErrorText(true);
			return;
		}
		addTodo(text);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="What needs to be done"
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				/>
				{errortext && <p>Invalid Input</p>}
				<button>Add todo</button>
			</form>
		</div>
	);
}
