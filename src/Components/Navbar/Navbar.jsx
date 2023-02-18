import Dropdown from "./Dropdown";
import { HiMailOpen } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
	const itemsList = ["Item1", "Item2", "Item3", "Item4", "Item5"];

	return (
		<div className="flex justify-between items-center px-5 py-6 border border-zinc-200 border-solid">
			<div className="flex gap-10 items-center">
				<div className="logo flex items-center gap-2">
					<HiMailOpen className="text-indigo-500 text-4xl" />
					<p className="text-xl font-bold">Estatery</p>
				</div>
				<ul className="hidden lg:flex lg:gap-4 lg:items-center">
					<li className="px-4 py-1.5 active rounded-[3px] text-indigo-700 bg-[#e3dffd]">
						<a href="#">Rent</a>
					</li>
					<li className="px-5 py-1.5">
						<a href="#">Buy</a>
					</li>
					<li className="px-5 py-1.5">
						<a href="#">Sell</a>
					</li>
					<li className="px-5 py-1.5 flex">
						<Dropdown
							text="Manage Property"
							itemsList={itemsList}
						/>
					</li>
					<li className="px-5 py-1.5 flex">
						<Dropdown text="Resources" itemsList={itemsList} />
					</li>
				</ul>
			</div>
			<div className="hidden lg:flex lg:gap-4">
				<button className="border border-slate-300 border-solid px-5 py-2 rounded-md text-indigo-500">
					Login
				</button>
				<button className=" px-5 py-2 rounded-md text-white bg-indigo-500">
					Signup
				</button>
			</div>
			<button className="block lg:hidden">
				<GiHamburgerMenu className="text-xl" />
			</button>
		</div>
	);
}
