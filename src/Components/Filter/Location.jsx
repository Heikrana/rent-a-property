import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { houses } from "../../assets/House-Data";
import { IoChevronDownCircleSharp } from "react-icons/io5";

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
			<div
				className="hover:bg-indigo-500 hover:text-white rounded-sm px-1"
				key={idx}
			>
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
					<button
						onClick={() => setCollapsed(!isCollapsed)}
						className="flex items-center gap-4"
					>
						{currLocation}
						<IoChevronDownCircleSharp className="text-indigo-500" />
					</button>
					<div
						id="myDropdown"
						className={`${
							isCollapsed ? "hidden" : "block"
						} absolute min-w-[120px] overflow-auto border border-solid border-indigo-300 rounded-md bg-white drop-shadow-2xl`}
					>
						<div className="flex flex-col">{houseList}</div>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
}
