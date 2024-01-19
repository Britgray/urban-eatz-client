import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" to={"/"}>
					UrbanEatz
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to={"/view-clients"}>
								View All Eatz
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to={"/add-clients"}>
								Add new Eatz
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;