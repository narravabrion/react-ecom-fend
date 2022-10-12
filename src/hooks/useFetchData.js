import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { axiosPrivate } from "../api/axiosInstance"

const useFetchData = () => {
	const [data, setData] = useState(null)

	// useEffect(() => {
	const fetchData = async (url) => {
		try {
			const response = await axiosPrivate.get(url)
			setData(response.data)
			return data
		} catch (error) {
			toast.error("failed to fetch requested data")
			console.log(error)
		}
	}
	return fetchData
	// }, [url])

	// return data
}

export default useFetchData
