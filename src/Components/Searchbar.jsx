import { useState } from "react";

export default function Searchbar() {
	const [term, setTerm] = useState("");

	function onFormSubmit(e) {
		e.preventDefault();
		console.log(term);
	}

	return (
		<div className="border border-solid border-zinc-200 p-2 rounded-md text-xs sm:text-sm md:text-lg">
			<form onSubmit={(e) => onFormSubmit(e)} className="flex">
				<input
					type="text"
					value={term}
					placeholder="Search with Search Bar"
					onChange={(e) => {
						setTerm(e.target.value);
					}}
					className="focus:outline-none"
				/>
				{/* <div
					className={`${
						term ? "text-zinc-600" : "text-zinc-400"
					} bg-zinc-100 rounded-full`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</div> */}
			</form>
		</div>
	);
}
