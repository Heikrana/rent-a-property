import { useState } from "react";
import Location from "./Location";
import DateFilter from "./DateFilter";
import PropertyFilter from "./PropertyFilter";
import PriceFilter from "./Price";
import Search from "./Search";

export default function Filter({ setHouseData }) {
	const [currLocation, setLocation] = useState("All");
	const [date, setDate] = useState("");
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(10000);
	const [propertyType, setPropertyType] = useState("All");

	const searchProps = {
		currLocation,
		date,
		minPrice,
		maxPrice,
		propertyType,
	};

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
			<Search searchProps={searchProps} setHouseData={setHouseData} />
		</div>
	);
}
