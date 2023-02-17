import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { houses } from "../../assets/House-Data";

export default function PropertyFilter({ propertyType, setPropertyType }) {
	const [isCollapsed, setCollapsed] = useState(true);

	let uniquePropertyTypes = [
		...new Set(houses.map((house) => house.data.type)),
	];
	uniquePropertyTypes = [...uniquePropertyTypes, "All"];

	function updateLocation(e) {
		setPropertyType(e.target.textContent);
		setCollapsed(true);
	}

	const properties = uniquePropertyTypes.map((type) => {
		return (
			<button onClick={updateLocation}>
				<li>{type}</li>
			</button>
		);
	});

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Property Type</p>

			<OutsideClickHandler onOutsideClick={() => setCollapsed(true)}>
				<div className="relative inline-block">
					<button onClick={() => setCollapsed(!isCollapsed)}>
						{propertyType}
					</button>
					<div
						id="myDropdown"
						className={`${
							isCollapsed ? "hidden" : "block"
						} absolute min-w-[230px] overflow-auto border border-solid bg-white`}
					>
						<ul className="flex flex-col items-start px-1 gap-1">
							{properties}
						</ul>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
}
