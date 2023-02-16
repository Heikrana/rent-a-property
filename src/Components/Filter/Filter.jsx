export default function Filter() {
	return (
		<div className="flex justify-between mt-10 items-center px-7 py-5 border border-solid border-zinc-200 bg-white rounded-md">
			<div>
				<p className="text-gray-600">Location</p>
			</div>
			<div>
				<p className="text-gray-600">When</p>
			</div>
			<div>
				<p className="text-gray-600">Price</p>
			</div>
			<div>
				<p className="text-gray-600">Property Type</p>
			</div>
			<button className="text-white bg-indigo-500 py-3 px-8 rounded-md">
				Search
			</button>
		</div>
	);
}
