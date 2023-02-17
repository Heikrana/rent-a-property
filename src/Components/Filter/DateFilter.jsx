import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-date-picker";

export default function DateFilter() {
	const [value, onChange] = useState(new Date());
	const [isCollapsed, setCollapsed] = useState(true);

	return (
		<div>
			<p className="text-gray-600 text-sm sm:text-md">When</p>
			<DatePicker onChange={onChange} value={value} />
		</div>
	);
}
