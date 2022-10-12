import React from "react"

const Deal = ({ item }) => {
	return (
		<>
			<article key={item?.sku} className='rounded flex h-20 w-full my-1 '>
				<img
					className='object-cover rounded'
					src={
						item?.media[0]?.image ||
						" https://images.unsplash.com/photo-1513708929605-6dd0e1b081bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
					}
					alt={item?.name || "some art"}
				/>
				<div className=' h-full flex flex-col justify-center pl-3'>
					<a
						href={item.url}
						className=' font-semibold uppercase text-sm transition-all ease-in-out duration-150 hover:text-fuchsia-700'
					>
						{item?.name || "add name"}
					</a>
					<div className='flex items-center pt-1'>
						<h4 className='pr-3 font-medium'>{item?.sale_price}</h4>
						<h4 className='line-through text-gray-400 font-medium'>
							{item?.retail_price}
						</h4>
					</div>
				</div>
			</article>
		</>
	)
}

export default Deal
