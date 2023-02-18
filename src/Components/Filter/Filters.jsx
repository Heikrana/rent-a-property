import { useState } from "react";
import Location from "./Location";
import DateFilter from "./DateFilter";
import PropertyFilter from "./PropertyFilter";
import PriceFilter from "./Price";
import Search from "./Search";

export default function Filters({ setHouseData }) {
	const [currLocation, setLocation] = useState("All");
	const [date, setDate] = useState("");
	const [minPrice, setMinPrice] = useState(500);
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
		<div className="grid grid-cols-2 gap-y-4 mt-4 items-center border border-solid border-zinc-200 bg-white rounded-md mb-4 lg:flex p-3 lg:mt-10 lg:px-7 lg:py-5 lg:justify-between ">
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
