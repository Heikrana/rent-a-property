import Navbar from "./Components/Navbar/Navbar";
import HouseList from "./Components/HouseCard/HouseList";
import SearchBar from "./Components/Searchbar";
import Filter from "./Components/Filter/Filter";

function App() {
	return (
		<div className="bg-[#e3dff50f]">
			<Navbar />
			<main className="mx-40">
				<div className="my-16">
					<div className="flex justify-between items-center">
						<h1 className="text-5xl">Search properties to rent</h1>
						<SearchBar />
					</div>
					<Filter />
				</div>
				<HouseList />
			</main>
		</div>
	);
}

export default App;
