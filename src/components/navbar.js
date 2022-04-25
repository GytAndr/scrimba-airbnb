import logo from "../images/airbnb 1.png";
import "./navbar.css";
export default function Navbar() {
	return (
		<div className="navbar">
			<img className="navbar--logo" src={logo}></img>
		</div>
	);
}
