import React, { useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import LatestProducts from "./LatestProducts"
import PopularProduct from "./PopularProduct"

const ProductSlider = () => {
	const [popular, setPopular] = useState(true)
	return (
		<>
			<section className='w-full flex flex-col justify-center items-center p-4 '>
				<div className='w-full  flex items-center justify-evenly text-gray-500'>
					<div
						className='flex flex-col items-center  uppercase cursor-pointer hover:text-black px-2'
						onClick={() => {
							setPopular(!popular)
						}}
					>
						<p className=' text-sm'>prev </p>
						<BsArrowLeft size={25} />
					</div>
					<div
						className='flex flex-col items-center uppercase cursor-pointer hover:text-black px-2'
						onClick={() => {
							setPopular(!popular)
						}}
					>
						<p className=' text-sm'>next</p> <BsArrowRight size={25} />
					</div>
				</div>
				<div className='w-full grid grid-cols-1 gap-4'>
					{popular ? (
						<PopularProduct status={popular} />
					) : (
						<LatestProducts status={popular} />
					)}
                   
				</div>
			</section>
		</>
	)
}

export default ProductSlider
