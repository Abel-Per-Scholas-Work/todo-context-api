import { createContext, useState, useEffect } from "react";

interface TodoProviderProps {
	children: React.ReactNode;
}

const data = [
	{
		id: "1",
		text: "Design landing page",
		completed: true,
	},
	{
		id: "2",
		text: "Set up CI/CD pipeline",
		completed: true,
	},
	{
		id: "3",
		text: "Fix login bug",
		completed: false,
	},
	{
		id: "4",
		text: "Write unit tests",
		completed: false,
	},
	{
		id: "5",
		text: "Deploy to staging",
		completed: false,
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
	const addTodo = (taskText: string) => {
		//id
		const id = Date.now().toString();
		const addTodoList = [
			{ id: id, text: taskText, completed: false },
			...todos,
		];
		setTodos(addTodoList);
	};
	const deleteTodo = (id: string) => {
		const updateTodoList = todos.filter((todo) => todo.id !== id);
		setTodos(updateTodoList);
	};
	const editTodo = (updatedTodoText: string, id: string) => {
		const updatedTodo = todos.map((todo) =>
			todo.id === id ? { ...todo, text: updatedTodoText } : todo
		);
		setTodos(updatedTodo);
	};
	const toggleTodo = (id: string) => {
		const updatedTodo = todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodo);
	};
	const clearCompleted = () => {
		const updateTodoList = todos.filter((todo) => todo.completed !== true);
		setTodos(updateTodoList);
	};

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
