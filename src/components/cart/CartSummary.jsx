import React from "react"

const CartSummary = () => {
	return (
		<>
			<section className='w-full mt-16 p-4 sm:mt-0'>
				<h3 className='uppercase my-2 text-xs font-medium text-gray-500 sm:border-b sm:pb-2'>cart summary</h3>
				<div className='shadow-lg p-2 sm:shadow-none'>
					<div className=' flex items-center justify-between font-medium text-gray-500'>
						<p className='text-sm capitalize'>subtotal</p>
						<h4 className='text-md'>$200</h4>
					</div>
					<div className='flex items-center justify-between font-medium text-gray-500'>
						<p className='text-sm capitalize'>tax</p>
						<h4 className='text-md'>$20</h4>
					</div>
					<div className='flex items-center justify-between font-semibold'>
						<p className='text-sm capitalize'>total</p>
						<h4 className='text-lg'>$220</h4>
					</div>
				</div>
				<div className=' border-gray-200 '>
					<h6 className='w-full bg-fuchsia-200 text-xs font-semibold cah6italize px-2 py-1'>
						Payment Policy
					</h6>
					<p className='text-sm px-2 py-1 text-gray-500'>
						All payments for products are done upon delivery!
					</p>
				</div>
			</section>
		</>
	)
}

export default CartSummary
