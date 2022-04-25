import "./Card.css";
import image from "../images/swimmer.png";
import star from "../images/star.png";

export default function Card() {
	return (
		<div className="card">
			<img className="card--image" src={image} />
			<div className="card--stats">
				<img className="card--star" src={star} />
				<span>5.0</span>
				<span className="grey">(6) • </span>
				<span className="grey">USA</span>
			</div>
			<p>Life Lessons with Katie Zaferes</p>
			<p>
				<span className="bold">From $136</span> / person
			</p>
		</div>
	);
}
