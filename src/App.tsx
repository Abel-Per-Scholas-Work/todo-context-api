import { useContext } from "react";
import "./App.css";
import FilterButton from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import ToDosList from "./components/TodosList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`w-full ${theme === "light" ? "light" : "dark"}`}>
			<main
				className={`max-w-[85rem] mx-auto flex h-full md:h-screen flex-col justify-center items-center`}>
				<section
					className={` w-[50%]  p-8 flex flex-col gap-y-6 ${
						theme === "light" ? "light" : "dark"
					}`}>
					<header className="flex justify-between items-center py-4 border-b-1">
						<div className="text-3xl ">Todo App (Context API)</div>
						<div>
							<ThemeToggleButton />
						</div>
					</header>
					<TodoInput />
					<FilterButton />
					<ToDosList />
				</section>
			</main>
		</div>
	);
}

export default App;
