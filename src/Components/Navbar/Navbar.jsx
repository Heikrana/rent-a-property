import Dropdown from "./Dropdown";

export default function Navbar() {
	return (
		<div className="flex justify-between px-10 py-6 border border-zinc-200 border-solid">
			<div className="flex gap-10 items-center">
				<div className="logo flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
						/>
					</svg>
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
