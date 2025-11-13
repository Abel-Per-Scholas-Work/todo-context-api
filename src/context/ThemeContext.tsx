import { createContext, useState } from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

//create a Context
//you can pass a default data or just initiate it with 'null'
export const ThemeContext = createContext(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<"light" | "dark" | null>("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
