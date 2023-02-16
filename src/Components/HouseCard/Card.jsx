export default function Card({ house, idx }) {
	return (
		<div className="flex flex-col items-center border border-solid border-zinc-200 bg-white rounded-md">
			<img
				src={house.image}
				alt="image-of-house"
				className="object-none w-[500px] h-[200px] rounded-t-md"
			/>
			<div>
				<div>
					{house.data.price}
					<span>/month</span>
				</div>
				<div>
					<h3>{house.data.location}</h3>
					<p>{house.data.address}</p>
				</div>
				<div className="flex gap-3">
					<p>{house.data.bedCount} Beds</p>
					<p>{house.data.bathroomCount} Bathrooms</p>
					<p>
						{house.data.area} m<sup>2</sup>
					</p>
				</div>
			</div>
		</div>
	);
}
