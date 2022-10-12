import React from "react"
import ProductCard from "../components/home/ProductCard"
import FilterBar from "../components/products/FilterBar"
import Intro from "../components/products/Intro"
import ProductDisplay from "../components/products/ProductDisplay"

const ProductsPage = () => {
	return (
		<>
			<div className='w-full  h-full flex flex-col items-center max-w-[1536px] '>
				<Intro />
				<div className='w-full max-w-7xl'>
					<FilterBar />
					<ProductDisplay />
					<FilterBar />
				</div>
			</div>
		</>
	)
}

export default ProductsPage
