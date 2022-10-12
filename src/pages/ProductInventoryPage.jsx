import axios from "axios"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/home/ProductCard"
import FilterBar from "../components/products/FilterBar"
import useFetchData from "../hooks/useFetchData"

const ProductInventoryPage = () => {
	const [searchParams] = useSearchParams()
	const [inventoryData, setInventoryData] = useState(null)
	const fetchData = useFetchData()
	const query = searchParams.get("category")
	const [loading, setLoading] = useState(true)

	query
		? (URL = `/inventory/products/?category__name__icontains=${query}`)
		: (URL = "/inventory/product-inventory/")

	const getInventory = async (url) => {
		try {
			const response = await axios.get(url)

			return response.data
		} catch (error) {
			// toast.error("failed to fetch requested data")
			console.log(error)
		}
	}

	useEffect(() => {
		let isMounted = true
		const getData = async (url) => {
			try {
				const inventory = []
				const data = await fetchData(url)
				data?.results?.forEach((item) => {
					console.log(item.product_inventory)
					item.product_inventory.forEach(async (item) => {
						const data = await getInventory(item)
						console.log(data)
						inventory.push(data)
					})
					// inventory =[...inventory,...item.product_inventory]
				})
				console.log(inventory)
				setInventoryData(data)
			} catch (error) {
				console.log(error)
			} finally {
				isMounted && setLoading(false)
			}
		}

		!inventoryData && isMounted ? getData(URL) : setLoading(false)
		return () => (isMounted = false)
	}, [loading])

	return (
		<div className='w-full  h-full flex flex-col items-center max-w-7xl '>
			<FilterBar />
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 p-4'>
				{inventoryData?.results.forEach((item) => {
					console.log(item)
					item.product_inventory.map(async (item, idx) => {
						const data = await getInventory(item)
						// console.log(data)
						return <ProductCard item={data} />
					})
				})}
			</div>
			<FilterBar />
		</div>
	)
}

export default ProductInventoryPage
