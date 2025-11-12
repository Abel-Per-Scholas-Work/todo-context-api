export default function TodoInput() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div>
			<form>
				<input type="text" placeholder="What needs to be done" />
				<button>Add todo</button>
			</form>
		</div>
	);
}
