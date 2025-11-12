import { createContext, useState, useEffect } from "react";

interface TodoProviderProps {
	children: React.ReactNode;
}

const data = [
	{
		id: "1",
		text: "Design landing page",
		completed: "pending",
	},
	{
		id: "2",
		text: "Set up CI/CD pipeline",
		completed: "pending",
	},
	{
		id: "3",
		text: "Fix login bug",
		completed: "in-progress",
	},
	{
		id: "4",
		text: "Write unit tests",
		completed: "in-progress",
	},
	{
		id: "5",
		text: "Deploy to staging",
		completed: "completed",
	},
];

export const TodoContext = createContext(null);

export function TodoProvider({ children }: TodoProviderProps) {
	//state
	//TODO: read stored todo in local storage
	const [todos, setTodos] = useState(data);
	//TODO:store Todos when the todos array changes
	useEffect(() => {}, []);
	//Todos: Action
	const addTodo = () => {};
	const deleteTodo = () => {};
	const editTodo = () => {};
	const toggleTodo = () => {};
	const clearCompleted = () => {};

	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				toggleTodo,
				clearCompleted,
				editTodo,
			}}>
			{children}
		</TodoContext.Provider>
	);
}
