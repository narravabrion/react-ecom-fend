import React from "react"
import { BsFillCartPlusFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const ProductDescription = () => {
	return (
		<>
			<section className='w-full shadow rounded px-4 my-4 md:my-0 md:shadow-none'>
				<div className='flex justify-start items-center gap-4 md:hidden'>
					<p className='rounded p-0.5 text-xs capitalize text-white bg-fuchsia-700 '>brion</p>
				</div>
				<h4 className='py-2 capitalize text-lg font-medium'>
					Captivating Maasai Traditional attire Painting
				</h4>
				<div className='flex items-center gap-4'>
					<p className='text-xs'>
						Type: <span className='text-fuchsia-700'>Sculpture</span> |
					</p>
					<Link to=' ' className='text-xs text-fuchsia-700'>
						Similar Types
					</Link>
				</div>
				<h3 className='font-semibold text-2xl py-2'>$200</h3>
				<div className='w-full pt-4'>
					<h3 className='font-semibold'>Description</h3>
					<p className='py-2 text-gray-500'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
						explicabo provident quos ratione, autem in id fugit commodi saepe
						aperiam quo quam nisi aspernatur nesciunt eligendi possimus,
						adipisci obcaecati molestiae.
					</p>
				</div>
				<button className='w-full rounded shadow-lg text-white font-semibold relative p-2 bg-fuchsia-700 my-2 hover:opacity-80'>
					<BsFillCartPlusFill className='absolute left-3 top-2.4' size={20} />
					ADD TO CART
				</button>
			</section>
		</>
	)
}

export default ProductDescription
