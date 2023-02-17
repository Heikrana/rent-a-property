import { houses } from "../../assets/House-Data";

export default function PropertyType() {
	const uniquePropertyTypes = [
		...new Set(houses.map((house) => house.data.type)),
	];

	const properties = uniquePropertyTypes.map((type) => {
		return <option value={type}>{type}</option>;
	});

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Property Type</p>
			<select name="propertyType" id="propertytype">
				{properties}
			</select>
		</div>
	);
}
