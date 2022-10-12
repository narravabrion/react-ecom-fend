import React from "react"
import { TbTruckDelivery } from "react-icons/tb"
import { GrPowerCycle } from "react-icons/gr"
import { RiCustomerService2Fill, RiSecurePaymentFill } from "react-icons/ri"

const About = () => {
	return (
		<>
			{/* <section className='flex flex-col justify-center items-center p-4 sm:grid sm:grid-rows-2'> */}
			<section className='grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-4 md:my-7 md:shadow-md'>
				<div className='flex flex-col items-center justify-center my-5 '>
					<div className=''>
						<TbTruckDelivery size={45} className='mb-3 hover:text-gray-500 transition-all duration-200 ease-in-out' />
					</div>
					<h4 className=' capitalize font-medium text-lg'>Free Delivery</h4>
					<p className='text-sm text-gray-500'>Free shipping on all orders</p>
				</div>
				<div className='flex flex-col items-center justify-center my-5'>
					<div className=''>
						<GrPowerCycle size={45} className='mb-3 hover:text-gray-500 transition-all duration-200 ease-in-out' />
					</div>
					<h4 className='capitalize font-medium text-lg'>Return Policy</h4>
					<p className='text-sm text-gray-500'>
						Flexible return policy on all items
					</p>
				</div>
				<div className='flex flex-col items-center justify-center my-5'>
					<div className=''>
						<RiCustomerService2Fill size={45} className='mb-3 hover:text-gray-500 transition-all duration-200 ease-in-out' />
					</div>
					<h4 className='capitalize font-medium text-lg'>
						24/7 Customer support
					</h4>
					<p className='text-sm text-gray-500'>
						Efficient customer support and service{" "}
					</p>
				</div>
				<div className='flex flex-col items-center justify-center my-5'>
					<div className=''>
						<RiSecurePaymentFill size={45} className='mb-3 hover:text-gray-500 transition-all duration-200 ease-in-out' />
					</div>
					<h4 className='capitalize font-medium text-lg'>Secure Payment</h4>
					<p className='text-sm text-gray-500'>
						Reliable, Fast and Secure payment
					</p>
				</div>
			</section>
		</>
	)
}

export default About
