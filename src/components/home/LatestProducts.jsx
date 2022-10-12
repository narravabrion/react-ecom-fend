import React, { useEffect, useState } from "react"
import useFetchData from "../../hooks/useFetchData"
import ProductCard from "./ProductCard"

const LatestProducts = () => {
	const fetchData = useFetchData()
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let isMounted = true
		const getData = async () => {
			try {
				const data = await fetchData(
					"/inventory/product-inventory/?is_active=true&ordering=-created_at/"
				)

				setData(data)
			} catch (error) {
				console.log(error)
			} finally {
				isMounted && setLoading(false)
			}
		}

		!data && isMounted ? getData() : setLoading(false)
		return () => (isMounted = false)
	}, [loading])

	return (
		<>
			<div className={`w-full transition-all duration-150 ease-in-out`}>
				<div className='w-full flex items-center justify-center'>
					<div className='w-full md:w-[33rem] text-center py-4 h-40'>
						<h1 className='font-bold text-3xl capitalize py-2'>
							latest products
						</h1>
						<p className='text-gray-500'>
							Checkout our new arrivals and be the first to grab the latest
							goodies from an asorted collection of fresh imaginative art
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4'>
					{data?.results?.slice(0, 4).map((item, idx) => {
						return <ProductCard key={idx} item={item} />
					})}
				</div>
			</div>
		</>
	)
}

export default LatestProducts
