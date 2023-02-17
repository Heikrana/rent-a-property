import { useState } from "react";
import { houses } from "../../assets/House-Data";

export default function Location() {
	const [isCollapsed, setCollapsed] = useState(true);

	const uniqueStates = [
		...new Set(
			houses.map(
				(house) =>
					`${house.data.address.state}, ${house.data.address.country}`
			)
		),
	];

	const houseList = uniqueStates.map((location) => {
		return <li>{location}</li>;
	});

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Location</p>
			<div className="relative inline-block">
				<button
					onClick={() => {
						setCollapsed(!isCollapsed);
					}}
				>
					All
				</button>
				<div
					id="myDropdown"
					className={`${
						isCollapsed ? "hidden" : "block"
					} absolute min-w-[230px] overflow-auto border border-solid z-1`}
				>
					<input type="text" placeholder="Search.." id="myInput" />
					<ul>{houseList}</ul>
				</div>
			</div>
		</div>
	);
}
