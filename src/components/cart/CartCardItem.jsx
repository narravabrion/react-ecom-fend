import React from "react"
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const CartCardItem = () => {
	return (
		<>
			<article className='rounded overflow-hidden shadow my-2'>
				<div className='w-full flex px-4 py-2 gap-4'>
					<div className='basis-1/3 '>
						<img
							src='https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
							alt=''
							className='w-full h-24 object-cover'
						/>
					</div>
					<div className=''>
						<h3 className='text-sm font-light capitalize'>
							The maasai african shuka
						</h3>
						<p className='font-medium text-sm'>
							<span className='text-xs font-normal'>Seller: </span> Brion
						</p>
						<h2 className='font-bold text-lg'>$200</h2>
					</div>
				</div>
				<div className='flex items-center py-2 px-4 justify-between gap-4 '>
					<button className='w-1/2 h-8 relative text-fuchsia-700 outline-none sm:w-44 border-none bg-white uppercase hover:opacity-90'>
						<AiOutlineDelete size={25} className='absolute left-2 top-1 ' />
						remove
					</button>
					<div className='flex w-1/2 sm:w-48 items-center justify-between '>
						<button className='rounded text-white p-1 bg-fuchsia-700 w-8 h-8 flex items-center justify-center'>
							<AiOutlineMinus />
						</button>
						<h3 className='font-bold'>1</h3>
						<button className='rounded text-white p-1 bg-fuchsia-700 w-8 h-8 flex items-center justify-center'>
							<AiOutlinePlus />
						</button>
					</div>
				</div>
			</article>
		</>
	)
}

export default CartCardItem
