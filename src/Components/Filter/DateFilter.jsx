import { useState } from "react";
import DatePicker from "react-date-picker";

export default function DateFilter({ date, setDate }) {
	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">When</p>
			<DatePicker onChange={setDate} value={date} />
		</div>
	);
}
