import Card from "./Card";

export default function HouseList() {
	const houses = [
		{
			image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$2,095",
				priceInCents: 209500,
				location: "Palm Harbor",
				address: "2699, Green Valley, Highland Lake, FL",
				bedCount: 3,
				bathroomCount: 2,
				area: "5x7",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
			data: {
				price: "$2,700",
				priceInCents: 270000,
				location: "Beverly Springfield",
				address: "2821, Lake Sevilla, Palm Harbor, TX",
				bedCount: 4,
				bathroomCount: 2,
				area: "6x7.5",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$4,550",
				priceInCents: 450000,
				location: "Faulkner Ave",
				address: "909, Woodland St, Michigan, IN",
				bedCount: 4,
				bathroomCount: 3,
				area: "8x10",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$2,095",
				priceInCents: 209500,
				location: "Palm Harbor",
				address: "2699, Green Valley, Highland Lake, FL",
				bedCount: 3,
				bathroomCount: 2,
				area: "5x7",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$2,700",
				priceInCents: 270000,
				location: "Beverly Springfield",
				address: "2821, Lake Sevilla, Palm Harbor, TX",
				bedCount: 4,
				bathroomCount: 2,
				area: "6x7.5",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$4,550",
				priceInCents: 450000,
				location: "Faulkner Ave",
				address: "909, Woodland St, Michigan, IN",
				bedCount: 4,
				bathroomCount: 3,
				area: "8x10",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$2,095",
				priceInCents: 209500,
				location: "Palm Harbor",
				address: "2699, Green Valley, Highland Lake, FL",
				bedCount: 3,
				bathroomCount: 2,
				area: "5x7",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
			data: {
				price: "$2,700",
				priceInCents: 270000,
				location: "Beverly Springfield",
				address: "2821, Lake Sevilla, Palm Harbor, TX",
				bedCount: 4,
				bathroomCount: 2,
				area: "6x7.5",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$4,550",
				priceInCents: 450000,
				location: "Faulkner Ave",
				address: "909, Woodland St, Michigan, IN",
				bedCount: 4,
				bathroomCount: 3,
				area: "8x10",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$2,095",
				priceInCents: 209500,
				location: "Palm Harbor",
				address: "2699, Green Valley, Highland Lake, FL",
				bedCount: 3,
				bathroomCount: 2,
				area: "5x7",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$2,700",
				priceInCents: 270000,
				location: "Beverly Springfield",
				address: "2821, Lake Sevilla, Palm Harbor, TX",
				bedCount: 4,
				bathroomCount: 2,
				area: "6x7.5",
			},
		},
		{
			image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
			data: {
				price: "$4,550",
				priceInCents: 450000,
				location: "Faulkner Ave",
				address: "909, Woodland St, Michigan, IN",
				bedCount: 4,
				bathroomCount: 3,
				area: "8x10",
			},
		},
	];

	const items = houses.map((house, idx) => {
		return <Card house={house} key={idx} />;
	});

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-10">
			{items}
		</div>
	);
}
