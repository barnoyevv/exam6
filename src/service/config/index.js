import axios from "axios";

const request = axios.create({
	baseURL: "https://fakestoreapi.com/"
})

request.interceptors.request.use((config)=>{
	
})