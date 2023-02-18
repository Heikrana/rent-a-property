import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
	const [term, setTerm] = useState("");

	function onFormSubmit(e) {
		e.preventDefault();
		console.log(term);
	}

	return (
		<div className="flex items-center">
			<div className="border border-solid border-zinc-200 p-2 rounded-md text-xs sm:text-sm md:text-lg hidden sm:block">
				<form onSubmit={(e) => onFormSubmit(e)} className="flex">
					<input
						type="text"
						value={term}
						placeholder="Search with Search Bar"
						onChange={(e) => {
							setTerm(e.target.value);
						}}
						className="focus:outline-none max-w-[12.5rem]"
					/>
					<button>
						<BsSearch className="text-md" />
					</button>
				</form>
			</div>
			<button className="block sm:hidden border border-solid border-zinc-400 p-2 rounded-3xl">
				<BsSearch />
			</button>
		</div>
	);
}
