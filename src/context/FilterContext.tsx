import { createContext, useState } from "react";
import type { Filter } from "../type";

interface FilterProviderProps {
	children: React.ReactNode;
}

export const FilterContext = createContext(null);

export function FilterProvider({ children }: FilterProviderProps) {
	const [filter, setFilter] = useState<Filter>("all");
	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</FilterContext.Provider>
	);
}
