import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import HouseList from "./Components/HouseCard/HouseList";
import SearchBar from "./Components/Searchbar";
import Filter from "./Components/Filter/Filter";
import { houses } from "./assets/House-Data";

function App() {
	const [houseData, setHouseData] = useState(houses);

	console.log(houseData);

	return (
		<div className="bg-[#e3dff50f]">
			<Navbar />
			<main className="mx-5 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40">
				<div className="my-6">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
							Search properties to rent
						</h1>
						<SearchBar />
					</div>
					<Filter setHouseData={setHouseData} />
				</div>
				<HouseList houseData={houseData} />
			</main>
		</div>
	);
}

export default App;
