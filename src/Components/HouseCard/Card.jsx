export default function Card({ house, key }) {
	return (
		<div className="flex flex-col items-center border border-solid rounded-md border-zinc-200">
			<img
				src={house.image}
				alt="image-of-house"
				className="object-none w-[500px] h-[200px]"
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
