import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomizedSnackbars from "../../components/notification/notification";
import "./index.css"

const Index = () => {
	const [form, setForm] = useState({})
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [type, setType] = useState(" ")

	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({ ...form, [name]: value })
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = form
		if (username === "admin" && password === "123") {
			setOpen(true)
			setType("success")
			setTimeout(()=>{
				navigate("/main")
			},1500)
		} else {
			setOpen(true)
			setType("error")
		}
	}
	return (
		<div className="login-page">
			<CustomizedSnackbars open={open} setOpen = {setOpen} type = {type}/> 
			<div className="login-card">
				<form id="submit" onSubmit={handleSubmit}>
					<h1>Login</h1>
					<TextField fullWidth id="fullWidth" label="Username" variant="outlined" type="text" onChange={handleChange} name="username" required />
					<TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={handleChange} name="password" required />
					<Button variant="contained" disableElevation type="submit" form="submit">
						Log in
					</Button>
				</form>
			</div>
		</div>
	)
}

export default Index
