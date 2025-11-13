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
		setText("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="flex gap-x-4">
				<div className="w-2/3">
					<input
						type="text"
						placeholder="What needs to be done"
						value={text}
						onChange={(e) => setText(e.target.value)}
						required
						className="p-3 rounded-sm w-full"
					/>
					{errortext && <p>Invalid Input</p>}
				</div>
				<button className="p-3 rounded-sm active cursor-pointer">
					Add todo
				</button>
			</form>
		</div>
	);
}
