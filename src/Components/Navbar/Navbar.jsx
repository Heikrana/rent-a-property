import Dropdown from "./Dropdown";
import { HiMailOpen } from "react-icons/hi";

export default function Navbar() {
	return (
		<div className="flex justify-between px-10 py-6 border border-zinc-200 border-solid">
			<div className="flex gap-10 items-center">
				<div className="logo flex items-center gap-2">
					<HiMailOpen className="text-indigo-500 text-4xl" />
					<p className="text-xl font-bold">Estatery</p>
				</div>
				<ul className="flex gap-4">
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
						<Dropdown value="Manage Property" />
					</li>
					<li className="px-5 py-1.5 flex">
						<Dropdown value="Resources" />
					</li>
				</ul>
			</div>
			<div className="flex gap-4">
				<button className="border border-slate-300 border-solid px-5 py-2 rounded-md text-indigo-500">
					Login
				</button>
				<button className=" px-5 py-2 rounded-md text-white bg-indigo-500">
					Signup
				</button>
			</div>
		</div>
	);
}
