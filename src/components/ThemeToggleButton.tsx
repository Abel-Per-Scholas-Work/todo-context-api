import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleButton() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	console.log(theme);
	return (
		<>
			{theme === "dark" ? (
				<button
					id="lightButton"
					className="p-4 rounded-sm font-semibold"
					onClick={() => toggleTheme("dark")}>
					🌞 Switch to Light
				</button>
			) : (
				<button
					id="darkButton"
					className="p-4 rounded-sm font-semibold"
					onClick={() => toggleTheme("light")}>
					{" "}
					🌚 Switch to Dark
				</button>
			)}
		</>
	);
}
