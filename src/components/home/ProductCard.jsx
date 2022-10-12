import React from "react"
import { Link } from "react-router-dom"
import { BiExpand } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs"

const ProductCard = ({ item }) => {
	return (
		<>
			<article className='sticky '>
				<img
					className='w-full h-64 object-cover'
					src={item?.media[0]?.image || "https://images.unsplash.com/photo-1513708929605-6dd0e1b081bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"}
					alt='product'
				/>
				<div className=''>
					<h4 className='uppercase font-medium pt-3 text-gray-700'>
						{item?.name || "Urban painting"}
					</h4>
					<div className='flex items-center pt-1'>
						<h4 className='pr-5 font-medium'>${item?.sale_price || 99} </h4>
						<h4 className='line-through text-gray-400 font-medium'>
							${item?.sale_price || 99}
						</h4>
					</div>
				</div>
				<div className='flex items-center py-4'>
					<button className='relative  w-10 overflow-hidden transition-all duration-300 ease-in-out group hover:w-32'>
						<span className='relative w-9 h-9 rounded-full text-center flex items-center justify-center bg-gray-400 text-white z-10 transition-all duration-200 ease-in-out group-hover:bg-fuchsia-700'>
							<BsFillCartPlusFill />
						</span>
						<p className='uppercase text-black text-xs font-medium absolute top-2.5 -left-10 w-24 opacity-0 invisible delay-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:left-8 '>
							Add to cart
						</p>
					</button>
					<button
						to=' '
						className='relative  w-10 overflow-hidden transition-all duration-300 ease-in-out group hover:w-24 hover:mr-2'
					>
						<span className='relative w-9 h-9 rounded-full text-center flex items-center justify-center bg-gray-400 text-white z-10 transition-all duration-200 ease-in-out group-hover:bg-fuchsia-700'>
							<AiOutlineHeart />
						</span>
						<p className='uppercase text-black text-xs font-medium absolute top-2.5 -left-10 w-24 opacity-0 invisible delay-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:left-5 '>
							wishlist
						</p>
					</button>
					<Link
						to=' '
						className='relative  w-10 overflow-hidden transition-all duration-300 ease-in-out group hover:w-32'
					>
						<span className='relative w-9 h-9 rounded-full text-center flex items-center justify-center bg-gray-400 text-white z-10 transition-all duration-200 ease-in-out group-hover:bg-fuchsia-700'>
							<BiExpand />
						</span>
						<p className='uppercase text-black text-xs font-medium absolute top-2.5 -left-10 w-24 opacity-0 invisible delay-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:left-10 '>
							details
						</p>
					</Link>
				</div>
			</article>
		</>
	)
}

export default ProductCard
