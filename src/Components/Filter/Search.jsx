import { houses } from "../../assets/House-Data";

export default function Search({ searchProps, setHouseData }) {
	const currState = searchProps.currLocation.split(",")[0],
		currDate = searchProps.date,
		minPriceInCents = searchProps.minPrice * 100,
		maxPriceInCents = searchProps.maxPrice * 100,
		propertyType = searchProps.propertyType;

	function filterData() {
		const filteredData = houses.filter((house) => {
			return (
				(currState === "All" ||
					house.data.address.state === currState) &&
				house.data.availableDate <= currDate &&
				house.data.priceInCents >= minPriceInCents &&
				house.data.priceInCents <= maxPriceInCents &&
				(propertyType === "All" || house.data.type === propertyType)
			);
		});

		return filteredData;
	}

	return (
		<div className="col-span-2 self-center">
			<button
				className="text-white bg-indigo-500 py-1 px-4 md:py-3 md:px-8 rounded-md"
				onClick={() => setHouseData(filterData())}
			>
				Search
			</button>
		</div>
	);
}
