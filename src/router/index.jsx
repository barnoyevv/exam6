import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App';
import {Login, Main, Posts} from "../pages/index"
const Index = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<App/>}>
				<Route index element={<Login/>}/>
				<Route path='main/*' element={<Main/>}>
					<Route index element={<Posts/>}/>
					<Route path='posts' element={<Posts/>}/>
				</Route>
			</Route>
		)
	)
	return <RouterProvider router={router}/>
}

export default Index