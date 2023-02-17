import { useState } from "react";

export default function PriceFilter() {
	const [minValue, setMin] = useState(0);
	const [maxValue, setMax] = useState(10000);

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">Price</p>
			<div className="flex">
				<div className="border border-solid border-zinc-300 rounded-lg w-20">
					<span className="ml-2">$</span>
					<input
						type="number"
						value={minValue}
						className="outline-none text-center w-10"
						onChange={(e) => setMin(e.target.value)}
					/>
				</div>
				<span className="mx-2">-</span>
				<div className="border border-solid border-zinc-300 rounded-lg w-20">
					<span className="ml-2">$</span>
					<input
						type="number"
						value={maxValue}
						className="outline-none text-center w-14"
						onChange={(e) => setMax(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}
