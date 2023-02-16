export default function Filter() {
	return (
		<div className="flex justify-between mt-10 items-center px-3 py-2 md:px-7 md:py-5 border border-solid border-zinc-200 bg-white rounded-md">
			<div>
				<p className="text-gray-600 text-sm sm:text-lg">Location</p>
			</div>
			<div>
				<p className="text-gray-600 text-sm sm:text-lg">When</p>
			</div>
			<div>
				<p className="text-gray-600 text-sm sm:text-lg">Price</p>
			</div>
			<div>
				<p className="text-gray-600 text-sm sm:text-lg">
					Property Type
				</p>
			</div>
			<button className="text-white bg-indigo-500 py-1 px-4 md:py-3 md:px-8 rounded-md">
				Search
			</button>
		</div>
	);
}
