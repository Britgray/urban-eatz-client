import React, {useEffect,useState, useCallback} from "react";
import axios from "axios";
import {Link,useNavigate,useParams} from "react-router-dom";

const EditClient = () => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [client, setClient] = useState({
		firstName: "",
		lastName: "",
        nameOfBusiness: "",
		email: "",
		category: "",
	});
	const { firstName, lastName, nameOfBusiness, email, category } = client;

	const loadClient = useCallback (async () => {
		const result = await axios.get(
			`http://localhost:9192/clients/client/${id}`
		);
		setClient(result.data);
	},[id]);

	useEffect(()=> {
		loadClient();
	},[loadClient]);

	const handleInputChange = (e) => {
		setClient({
			...client,
			[e.target.name]: e.target.value,
		});
	};
	const updateClient = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:9192/clients/update/${id}`,
			client);
		navigate("/view-clients");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Client</h2>
			<form onSubmit={(e) => updateClient(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="nameOfBusiness">
						Business Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="nameOfBusiness"
						id="nameOfBusiness"
						required
						value={nameOfBusiness}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="category">
						Category
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="category"
						id="category"
						required
						value={category}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-clients"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditClient;