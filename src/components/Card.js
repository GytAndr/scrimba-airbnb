import "./Card.css";
import star from "../images/star.png";

export default function Card(props) {
	let badgeText; //declaration makes value falsy by default. later it will be used for conditional rendering for text badge.
	if (props.item.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.item.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}{" "}
			<img
				className="card--image"
				src={require("../images/" + props.item.coverImg + ".png")}
			/>
			<div className="card--stats">
				<img className="card--star" src={star} />
				<span>{props.item.stats.rating}</span>
				<span className="grey"> ({props.item.stats.reviewCount}) • </span>
				<span className="grey">{props.item.location}</span>
			</div>
			<p className="card--title">{props.item.title}</p>
			<p className="card--price">
				<span className="bold">From ${props.item.price}</span> / person
			</p>
		</div>
	);
}
