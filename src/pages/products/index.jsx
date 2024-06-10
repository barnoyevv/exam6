import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import "./index.css"

function Products() {
	const [users, setUsers] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [category, setCategory] = useState("");
	const [itemsPerPage, setItemsPerPage] = useState(3);
	const [page, setPage] = useState(1);



	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products?_page=1&_limit=2`).then(response => {
			setUsers(response.data)
		})
	}, [])

	useEffect(() => {
		const filtered = users.filter(item => {
			const categoryMatch = category ? item.category === category : true;
			return categoryMatch;
		});
		setFilteredProducts(filtered);
		setPage(1);
	}, [category, users]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleCategoryChange = event => {
		setCategory(event.target.value);
	};

	const handleItemsPerPageChange = event => {
		setItemsPerPage(event.target.value);
		setPage(1);
	};

	const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);

	const displayedProducts = filteredProducts.slice(startIndex, endIndex);

	return (
		<div>
			<div className="FormContro1">
			<FormControl variant="outlined" fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={category}
						onChange={handleCategoryChange}
						label="Category"
					>
						<MenuItem value="">All</MenuItem>
						<MenuItem value="men's clothing">Men's Clothing</MenuItem>
						<MenuItem value="women's clothing">Women's Clothing</MenuItem>
						<MenuItem value="jewelery">Jewelery</MenuItem>
						<MenuItem value="electronics">Electronics</MenuItem>
					</Select>
				</FormControl>
				<FormControl variant="outlined" fullWidth className="my-3">
					<InputLabel>Limit</InputLabel>
					<Select
						value={itemsPerPage}
						onChange={handleItemsPerPageChange}
						label="Limit"
					>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={10}>10</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className="products-list">
				{displayedProducts.map(item => (
					<div key={item.id} className="product-card">
						<Link to={`/product/${item.id}`} className="text-decoration-none">
							<div className="card">
								<div className="card-header bg-primary text-center">
									<h3 className="text-white">{item.title}</h3>
								</div>
								<div className="card-body text-center">
									<img
										src={item.image}
										alt={item.title}
										className="product-image"
									/>
								</div>
								
								<div className="card-footer">
									<p>{item.description}</p>
									<div className="rate">
										<span><StarIcon sx={{color: "orange"}}/></span>
										<span>{item.rating.rate}</span>
									</div>
									<strong>{item.price}$</strong>
								</div>
							</div>
							</Link>
					</div>
				))}
			</div>
			<Stack spacing={2}>
				<Pagination
					count={pageCount}
					page={page}
					onChange={handleChangePage}
					color="secondary"
					variant="outlined"
				/>
			</Stack>
		</div>
	);
}

export default Products;