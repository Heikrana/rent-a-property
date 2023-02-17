import { useState } from "react";

export default function PriceFilter({
	minPrice,
	setMinPrice,
	maxPrice,
	setMaxPrice,
}) {
	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Price</p>
			<div className="flex">
				<div className="border border-solid border-zinc-300 rounded-lg w-20">
					<span className="ml-2">$</span>
					<input
						type="number"
						value={minPrice}
						className="outline-none text-center w-10"
						onChange={(e) => setMinPrice(e.target.value)}
					/>
				</div>
				<span className="mx-2">-</span>
				<div className="border border-solid border-zinc-300 rounded-lg w-20">
					<span className="ml-2">$</span>
					<input
						type="number"
						value={maxPrice}
						className="outline-none text-center w-14"
						onChange={(e) => setMaxPrice(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}
