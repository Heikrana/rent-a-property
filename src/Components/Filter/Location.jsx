import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { houses } from "../../assets/House-Data";

export default function Location() {
	const [isCollapsed, setCollapsed] = useState(true);
	const [currLocation, setLocation] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");

	let uniqueStates = [
		...new Set(
			houses.map(
				(house) =>
					`${house.data.address.state}, ${house.data.address.country}`
			)
		),
	];
	uniqueStates = [...uniqueStates, "All"];

	function updateLocation(e) {
		setLocation(e.target.textContent);
		setCollapsed(true);
	}

	const houseList = uniqueStates.map((location) => {
		return (
			<button onClick={updateLocation}>
				<li>{location}</li>
			</button>
		);
	});

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Location</p>
			<OutsideClickHandler
				onOutsideClick={() => {
					setCollapsed(true);
				}}
			>
				<div className="relative inline-block">
					<button
						onClick={() => {
							setCollapsed(!isCollapsed);
						}}
					>
						{currLocation}
					</button>
					<div
						id="myDropdown"
						className={`${
							isCollapsed ? "hidden" : "block"
						} absolute min-w-[230px] overflow-auto border border-solid bg-white`}
					>
						<ul className="flex flex-col items-start p-1">
							{houseList}
						</ul>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
}
