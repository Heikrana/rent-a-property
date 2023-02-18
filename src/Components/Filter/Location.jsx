import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { houses } from "../../assets/House-Data";

export default function Location({ currLocation, setLocation }) {
	const [isCollapsed, setCollapsed] = useState(true);

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

	const houseList = uniqueStates.map((location, idx) => {
		return (
			<div className="hover:bg-zinc-200 rounded-sm px-1" key={idx}>
				<button onClick={updateLocation}>
					<span>{location}</span>
				</button>
			</div>
		);
	});

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Location</p>
			<OutsideClickHandler onOutsideClick={() => setCollapsed(true)}>
				<div className="relative inline-block">
					<button onClick={() => setCollapsed(!isCollapsed)}>
						{currLocation}
					</button>
					<div
						id="myDropdown"
						className={`${
							isCollapsed ? "hidden" : "block"
						} absolute min-w-[230px] overflow-auto border border-solid border-zinc-300 rounded-md bg-white drop-shadow-2xl`}
					>
						<div className="flex flex-col">{houseList}</div>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
}
