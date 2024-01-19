import React, {useEffect, useState } from "react";
import axios from "axios";
import {FaEdit,FaEye,FaTrashAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../../Common/Search";

const ClientsView = () => {
	const [clients, setClients] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	useEffect(() => {
		loadClients();
	}, []);

	const loadClients = async () => {
		try{
		const result = await axios.get(
			"http://localhost:9192/clients",
			{validateStatus: () => true,
					
		})
	
		if (result.status === 302) {
			setClients(result.data);
			setError(null);
		}
	}catch (error){
		console.error("Error loading clients:", error);
		setError("An error occurred while fetching data.");
	}finally{
		setLoading(false);
	}
};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:9192/clients/delete/${id}`
		);
		loadClients();
	};

	return (
		<section>
			{loading?(
				<p>Loading clients...</p>
			) : error?(
				<p>{error}</p>
			):(
				<>
				
			<Search search={search} setSearch={setSearch}/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
                        <th>Bussiness Name</th>
						<th>Email</th>
						<th>Category</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{clients
						.filter((st) =>
							st.firstName.toLowerCase().includes(search)
						)
						.map((client, index) => (
							<tr key={client.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{client.firstName}</td>
								<td>{client.lastName}</td>
                                <td>{client.nameOfBusiness}</td>
								<td>{client.email}</td>
								<td>{client.category}</td>
								<td className="mx-2">
									<Link
										to={`/client-profile/${client.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-client/${client.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(client.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			</>
			)}
		</section>
	);
};

export default ClientsView;