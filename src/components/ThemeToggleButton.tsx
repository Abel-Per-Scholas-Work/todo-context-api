import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleButton() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	console.log(theme);
	return (
		<>
			{theme === "dark" ? (
				<button onClick={() => toggleTheme("dark")}>🌞 Switch to Light</button>
			) : (
				<button onClick={() => toggleTheme("light")}> 🌚 Switch to Dark</button>
			)}
		</>
	);
}
