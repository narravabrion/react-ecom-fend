import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData"

const ProductDisplay = () => {
	const [searchParams] = useSearchParams()
	const query = searchParams.get("name")
	const URL = `/inventory/products/?category__name__icontains=${query}`
	// const data = useFetchData(URL)

	const fetchData = useFetchData()
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let isMounted = true
		const getData = async (url) => {
			try {
				const data = await fetchData(url)

				setData(data)
			} catch (error) {
				console.log(error)
			} finally {
				isMounted && setLoading(false)
			}
		}

		!data && isMounted ? getData(URL) : setLoading(false)
		return () => (isMounted = false)
	}, [loading])

	return (
		<>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 p-4'>
				{data?.results.map((item) => {
					return (
						<Link key={item.id} to={`/products/inventory?category=${query}`}>
							<article className=' rounded shadow p-2'>
								<h2 className='text-xl font-semibold pb-4'>{item.name}</h2>
								<p className='font-medium text-gray-500 '>{item.description}</p>
							</article>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default ProductDisplay
