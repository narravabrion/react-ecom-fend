import React, { useState } from "react"
import { Link } from "react-router-dom"

const CategoryHighlight = () => {
	const [categories, setCategories] = useState(categories_list)
	return (
		<>
			<section className=' w-full flex flex-col sm:flex-row justify-center items-center p-4 first:sm:basis-44 sm:first:invisible '>
				{categories.map((item, idx) => {
					return (
						<Link key={idx} to={`/products?name=${item.name}`}>
							<article
								
								className='relative w-full h-44 bg-red-200 overflow-hidden group mb-5'
							>
								<img
									className='w-full h-full object-cover object-center'
									src={item.image}
									alt={item.name}
								/>
								<div className='absolute top-0 left-0 bottom-0 right-0 bg-black/40 flex items-center justify-center invisible group-hover:visible transition-all duration-300 ease-in-out'>
									<h1 className='text-white font-semibold text-xl uppercase transition-all ease-in-out delay-150'>
										{item.name}
									</h1>
								</div>
							</article>
						</Link>
					)
				})}
			</section>
		</>
	)
}

export default CategoryHighlight

const categories_list = [
	{
		name: "decorative",
		image:
			"https://images.unsplash.com/photo-1587145990306-28960c0cb77b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
	},
	{
		name: "commercial",
		image:
			"https://images.unsplash.com/photo-1610265560811-8c37a3f0666f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
	},
	{
		name: "fine art",
		image:
			"https://images.unsplash.com/photo-1578762915100-7a2d602a09bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
	},
]
