import React, {useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClientProfile = () => {
	const { id } = useParams();
	const [client, setClient] = useState({
		firstName: "",
		lastName: "",
        nameOfBusiness: "",
		email: "",
		category: "",
	});

	const loadClient = useCallback(async () => {
		try{
			const result = await axios.get(`http://localhost:8080/clients/client/${id}`);
		setClient(result.data);
	}catch(error){
		console.error("Error loading client:",error);
	}
},[id]);

	useEffect(() => {
		loadClient();
	}, [loadClient]);

	

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${client.firstName} ${client.lastName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{client.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{client.lastName}
										</p>
									</div>
								</div>
								<hr />
                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Business Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{client.nameOfBusiness}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{client.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Category
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{client.category}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClientProfile;