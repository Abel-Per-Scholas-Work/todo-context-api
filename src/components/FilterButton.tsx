import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export default function FilterButton() {
	const { filter, setFilter } = useContext(FilterContext);

	return (
		<div className="flex justify-center gap-x-4">
			<button
				className={`px-3 py-2 rounded-sm cursor-pointer ${
					filter === "all" && "active"
				}`}
				onClick={() => setFilter("all")}>
				All
			</button>
			<button
				className={`px-3 py-2 rounded-sm cursor-pointer ${
					filter === "active" && "active"
				}`}
				onClick={() => setFilter("active")}>
				Active
			</button>
			<button
				className={`px-3 py-2 rounded-sm cursor-pointer ${
					filter === "completed" && "active"
				}`}
				onClick={() => setFilter("completed")}>
				Completed
			</button>
		</div>
	);
}
