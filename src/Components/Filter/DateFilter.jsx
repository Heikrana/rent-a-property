import { useState } from "react";

export default function DateFilter({ date, setDate }) {
	const [isDateChosen, setIsDateChose] = useState(false);

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">When</p>
			{/* <p
			className={`${isDateChosen ? "hidden" : "block"}`}
			onClick={() => setIsDateChose(true)}
			>
				Select Move-in Date
			</p> */}
			<input
				type="date"
				min="2001-01-01"
				max="2023-12-31"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				// className={`${isDateChosen ? "block" : "hidden"}`}
			/>
		</div>
	);
}
