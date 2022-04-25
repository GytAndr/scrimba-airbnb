import "./Hero.css";
import grid from "../images/grid.png";

export default function Hero() {
	return (
		<div className="hero-container">
			<div className="hero--image">
				<img src={grid}></img>
			</div>
			<div className="hero-text">
				<h1>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</div>
	);
}
