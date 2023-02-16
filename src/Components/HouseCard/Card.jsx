import { BiBed, BiBath } from "react-icons/bi";
import { CgShapeRhombus } from "react-icons/cg";
import { RiHeart2Line } from "react-icons/ri";

export default function Card({ house, idx }) {
	return (
		<div className="flex flex-col border border-solid border-zinc-200 bg-white rounded-md">
			<img
				src={house.image}
				alt="image-of-house"
				className="object-none w-[500px] h-[200px] rounded-t-md"
			/>
			<div className="p-6">
				<div className="flex justify-between pb-4 border-b border-solid border-zinc-200">
					<div>
						<div className="my-2">
							<span className="text-indigo-600 font-bold text-2xl">
								{house.data.price}
							</span>
							<span className="text-sm text-gray-400">
								/month
							</span>
						</div>
						<div>
							<h3 className="text-3xl font-bold my-2">
								{house.data.location}
							</h3>
							<p className="text-gray-400">
								{house.data.address}
							</p>
						</div>
					</div>
					<RiHeart2Line className="text-5xl border border-solid rounded-full p-2 text-indigo-500 mt-3" />
				</div>
				<div className="flex gap-4 md:gap-8 pt-4 text-gray-400">
					<p className="flex items-center gap-2">
						<BiBed className="text-indigo-500 text-xl" />
						<span>{house.data.bedCount} Beds</span>
					</p>
					<p className="flex items-center gap-2">
						<BiBath className="text-indigo-500 text-xl" />
						<span>{house.data.bathroomCount} Bathrooms</span>
					</p>
					<p className="flex items-center gap-2">
						<CgShapeRhombus className="text-indigo-500 text-xl" />
						<span>
							{house.data.area} m<sup>2</sup>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
