import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
	const cards = data.map((item) => {
		return (
			<Card
				img={item.coverImg}
				rating={item.stats.rating}
				reviewCount={item.stats.reviewCount}
				location={item.location}
				title={item.title}
				price={item.price}
			/>
		);
	});
	return (
		<div>
			<Navbar />
			<Hero />
			{cards}
		</div>
	);
}
