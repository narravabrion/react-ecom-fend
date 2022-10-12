import React from "react"
import About from "../components/home/About"
import CategoryHighlight from "../components/home/CategoryHighlight"
import Deals from "../components/home/Deals"
import Landing from "../components/home/Landing"
import ProductSlider from "../components/home/ProductSlider"

const HomePage = () => {
	return (
		<>
			<div className='w-full  h-full flex flex-col items-center max-w-[1536px] '>
				<Landing />
				<div className="w-full max-w-7xl">
				<About />
				<CategoryHighlight />
				<ProductSlider />

				<Deals />
				</div>
			</div>
		</>
	)
}

export default HomePage
