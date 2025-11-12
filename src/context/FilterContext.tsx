import { createContext, useState } from "react";

interface FilterProviderProps {
	children: React.ReactNode;
}

export const FilterContext = createContext(null);

export function FilterProvider({ children }: FilterProviderProps) {
	const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
	return (
		<FilterContext.Provider value={{ filter }}>
			{children}
		</FilterContext.Provider>
	);
}
