import Navbar from "./Components/Navbar/Navbar";
import HouseList from "./Components/HouseCard/HouseList";

function App() {
	return (
		<>
			<Navbar />
			<main className="mx-40">
				<HouseList />
			</main>
		</>
	);
}

export default App;
