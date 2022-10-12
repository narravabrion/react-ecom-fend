import React, { useEffect, useState } from "react"
import useFetchData from "../../hooks/useFetchData"
import Deal from "./Deal"

const Deals = () => {
	const fetchData = useFetchData()
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		let isMounted = true
		const getData = async () => {
			try {
				
				const data = await fetchData(
					"/inventory/product-inventory/?is_active=true&is_on_sale=true&ordering=sale_price"
				)
				
				setData(data)
				
			} catch (error) {
				console.log(error)
			}finally{
				isMounted && setLoading(false)
			}
		}
		
		!data && isMounted? getData() :setLoading(false)
		return ()=> isMounted=false
	}, [loading])

	

	console.log(data)
	return (
		<>
			<section className='w-full flex flex-col justify-center items-center pb-4'>
				<div className='w-full flex items-center justify-center'>
					<div className='w-full md:w-[33rem] text-center py-4 '>
						{/* <div className='w-full text-center'> */}
						<h3 className='font-bold text-3xl capitalize py-2'>
							Deals of the Week
						</h3>
						<p className='text-gray-500 px-4'>
							Enjoy the latest deals to enrich your shopping experience with the
							most affordable yet appealing pieces of art
						</p>
					</div>
				</div>
				<div className='p-4 w-full grid gap-5 grid-cols-1 sm:gap-3 sm:grid-cols-3 md:grid-cols-4'>
					{data?.results.map((item, idx) => {
						return <Deal item={item} idx={idx} key={idx} />
					})}
				</div>
			</section>
		</>
	)
}

export default Deals
