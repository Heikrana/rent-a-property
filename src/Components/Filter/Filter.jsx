import Location from "./Location";
import DateFilter from "./DateFilter";
import PropertyType from "./PropertyType";

export default function Filter() {
	return (
		<div className="flex justify-between mt-10 items-center px-3 py-2 md:px-7 md:py-5 border border-solid border-zinc-200 bg-white rounded-md">
			<Location />
			<DateFilter />
			<div>
				<p className="text-gray-600 text-sm sm:text-md">Price</p>
			</div>
			<PropertyType />
			<button className="text-white bg-indigo-500 py-1 px-4 md:py-3 md:px-8 rounded-md">
				Search
			</button>
		</div>
	);
}
