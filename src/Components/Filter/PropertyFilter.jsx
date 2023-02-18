import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { houses } from "../../assets/House-Data";
import { IoChevronDownCircleSharp } from "react-icons/io5";

export default function PropertyFilter({ propertyType, setPropertyType }) {
	const [isCollapsed, setCollapsed] = useState(true);

	let uniquePropertyTypes = [
		...new Set(houses.map((house) => house.data.type)),
	];
	uniquePropertyTypes = [...uniquePropertyTypes, "All"];

	function updateType(e) {
		setPropertyType(e.target.textContent);
		setCollapsed(true);
	}

	const properties = uniquePropertyTypes.map((type, idx) => {
		return (
			<div
				className="hover:bg-indigo-500 hover:text-white rounded-sm px-1"
				key={idx}
			>
				<button onClick={updateType}>
					<span>{type}</span>
				</button>
			</div>
		);
	});

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Property Type</p>

			<OutsideClickHandler onOutsideClick={() => setCollapsed(true)}>
				<div className="relative inline-block">
					<button
						onClick={() => setCollapsed(!isCollapsed)}
						className="flex items-center gap-4"
					>
						{propertyType}
						<IoChevronDownCircleSharp className="text-indigo-500" />
					</button>
					<div
						id="myDropdown"
						className={`${
							isCollapsed ? "hidden" : "block"
						} absolute min-w-[120px] overflow-auto border border-solid border-zinc-300 rounded-md bg-white drop-shadow-2xl`}
					>
						<ul className="flex flex-col">{properties}</ul>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
}
