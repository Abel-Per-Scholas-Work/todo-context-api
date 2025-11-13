import { createContext, useState } from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

//create a Context
//you can pass a default data or just initiate it with 'null'
export const ThemeContext = createContext(null);

export function ThemeProveider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
