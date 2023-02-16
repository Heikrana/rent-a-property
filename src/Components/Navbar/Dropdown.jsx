export default function Dropdown(props) {
	// var menu = document.getElementById("menu");

	// // open/close the menu when the user clicks on the button
	// function toggleMenu() {
	// 	if (menu.classList.contains("hidden")) {
	// 		menu.classList.remove("hidden");
	// 	} else {
	// 		menu.classList.add("hidden");
	// 	}
	// }

	// // close the menu when the user clicks outside of it
	// window.onclick = function (event) {
	// 	var dropdownWrapper = document.getElementById("dropdown-wrapper");
	// 	if (
	// 		!dropdownWrapper.contains(event.target) &&
	// 		!menu.classList.contains("hidden")
	// 	) {
	// 		menu.classList.add("hidden");
	// 	}
	// };

	return (
		<div>
			<div id="dropdown-wrapper">
				{/* <button onClick={toggleMenu()} className="flex gap-1">
					{props.value}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</button> */}
				{/* <div id="menu" class="flex flex-col bg-white drop-shadow-md">
					<a
						class="px-5 py-3 hover:bg-amber-300 border-b border-gray-200"
						href="#"
					>
						About KindaCode.com
					</a>
					<a
						class="px-5 py-3 hover:bg-amber-300 border-b border-gray-200"
						href="#"
					>
						Contact Us
					</a>
					<a
						class="px-5 py-3 hover:bg-amber-300 border-b border-gray-200"
						href="#"
					>
						Privacy Policy
					</a>
					<a class="px-5 py-3 hover:bg-amber-300" href="#">
						Hello There
					</a>
				</div> */}
			</div>
		</div>
	);
}
