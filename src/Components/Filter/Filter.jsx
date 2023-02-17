import { useState } from "react";
import Location from "./Location";
import DateFilter from "./DateFilter";
import PropertyFilter from "./PropertyFilter";
import PriceFilter from "./Price";

export default function Filter() {
	const [currLocation, setLocation] = useState("All");
	const [date, setDate] = useState(new Date());
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(10000);
	const [propertyType, setPropertyType] = useState("All");

	return (
		<div className="flex justify-between mt-10 items-center px-3 py-2 md:px-7 md:py-5 border border-solid border-zinc-200 bg-white rounded-md">
			<Location currLocation={currLocation} setLocation={setLocation} />
			<DateFilter date={date} setDate={setDate} />
			<PriceFilter
				minPrice={minPrice}
				setMinPrice={setMinPrice}
				maxPrice={maxPrice}
				setMaxPrice={setMaxPrice}
			/>
			<PropertyFilter
				propertyType={propertyType}
				setPropertyType={setPropertyType}
			/>
			<button className="text-white bg-indigo-500 py-1 px-4 md:py-3 md:px-8 rounded-md">
				Search
			</button>
		</div>
	);
}
