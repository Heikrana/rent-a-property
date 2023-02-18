import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function PriceFilter({
	minPrice,
	setMinPrice,
	maxPrice,
	setMaxPrice,
}) {
	const [isCollapsed, setCollapsed] = useState(true);

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Price</p>
			<OutsideClickHandler onOutsideClick={() => setCollapsed(true)}>
				<div className="relative">
					<div
						className="price-input flex w-full"
						onClick={() => setCollapsed(false)}
					>
						<div className="flex items-center border border-solid border-zinc-400 rounded-md px-2">
							<span>$</span>
							<input
								type="number"
								value={minPrice}
								className="outline-none text-center w-14"
								onChange={(e) => setMinPrice(e.target.value)}
							/>
						</div>
						<span className="mx-2">-</span>
						<div className="flex items-center border border-solid border-zinc-400 rounded-md px-2">
							<span>$</span>
							<input
								type="number"
								value={maxPrice}
								className="outline-none text-center w-14"
								onChange={(e) => setMaxPrice(e.target.value)}
							/>
						</div>
					</div>
					<div
						className={`${
							isCollapsed ? "hidden" : "block"
						} absolute bg-white border border-solid border-zinc-200 rounded-md drop-shadow-2xl p-3 m-2`}
					>
						<div className="flex flex-col gap-2">
							<div>
								<span>Min.</span>
								<input
									type="range"
									min="500"
									max={maxPrice}
									value={minPrice}
									step="100"
									onChange={(e) => {
										setMinPrice(e.target.value);
									}}
								/>
							</div>
							<div>
								<span>Max.</span>
								<input
									type="range"
									min={minPrice}
									max="10000"
									value={maxPrice}
									step="100"
									onClick={(e) => console.log(e)}
									onChange={(e) => {
										setMaxPrice(e.target.value);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
}
