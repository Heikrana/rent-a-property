import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Dropdown(props) {
	const [isCollapsed, setCollapsed] = useState(true);

	// function updateLocation(e) {
	// 	setLocation(e.target.textContent);
	// 	setCollapsed(true);
	// }

	const list = props.itemsList.map((item, idx) => {
		return (
			<div
				className="hover:bg-indigo-500 hover:text-white rounded-sm px-1"
				key={idx}
			>
				<span className="cursor-pointer">{item}</span>
			</div>
		);
	});

	return (
		<OutsideClickHandler onOutsideClick={() => setCollapsed(true)}>
			<div className="relative inline-block">
				<button
					onClick={() => setCollapsed(!isCollapsed)}
					className="flex items-center gap-2"
				>
					{props.text}
					<IoChevronDownOutline />
				</button>
				<div
					id="myDropdown"
					className={`${
						isCollapsed ? "hidden" : "block"
					} absolute min-w-[60px] overflow-auto border border-solid border-indigo-300 rounded-md bg-white drop-shadow-2xl`}
				>
					<div className="flex flex-col">{list}</div>
				</div>
			</div>
		</OutsideClickHandler>
	);
}
