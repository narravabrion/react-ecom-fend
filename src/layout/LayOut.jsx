import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const LayOut = () => {
	return (
		<>
			<main className='w-full h-full flex flex-col items-center '>
				<Navbar />
				<Outlet />
				<Footer/>
			</main>
		</>
	)
}

export default LayOut
