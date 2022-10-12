import React from "react"
import CartCardItem from "../components/cart/CartCardItem"
import CartSummary from "../components/cart/CartSummary"

const CartPage = () => {
	return (
		<>
			<div className='w-full  h-full flex flex-col items-center max-w-7xl '>
				<div className='w-full sm:flex sm:flex-row-reverse sm:mt-36'>
					<div className=' w-1/3 sm:shadow-md sm:rounded sm:mb-4 sm:mr-2'>
						<CartSummary />
            <div className='my-3 shadow w-full py-2 px-4  hidden sm:block sm:shadow-none'>
							<button className='w-full rounded shadow-lg py-3 text-white uppercase font-medium bg-fuchsia-700 hover:opacity-80'>
								checkout(price)
							</button>
						</div>
					</div>
					<div className=' w-2/3'>
						<div className='w-full p-4'>
							<h3 className='uppercase text-sm text-gray-500'>cart(number)</h3>
							<CartCardItem />
						</div>
						<div className='my-3 shadow w-full py-2 px-4 sm:hidden '>
							<button className='w-full rounded shadow-lg py-3 text-white uppercase font-medium bg-fuchsia-700 hover:opacity-80'>
								checkout(price)
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartPage
