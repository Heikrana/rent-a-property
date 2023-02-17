import Card from "./Card";
import { houses } from "../../assets/House-Data";

export default function HouseList() {
	const items = houses.map((house, idx) => {
		return <Card house={house} key={idx} />;
	});

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center my-10">
			{items}
		</div>
	);
}
