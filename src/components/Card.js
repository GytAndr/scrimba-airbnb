import "./Card.css";
import star from "../images/star.png";

export default function Card(props) {
	return (
		<div className="card">
			<img
				className="card--image"
				src={require("../images/" + props.img + ".png")}
			/>
			<div className="card--stats">
				<img className="card--star" src={star} />
				<span>{props.rating}</span>
				<span className="grey"> ({props.reviewCount}) • </span>
				<span className="grey">{props.country}</span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className="bold">From ${props.price}</span> / person
			</p>
		</div>
	);
}
