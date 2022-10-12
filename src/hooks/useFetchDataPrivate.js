import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import useAxiosPrivate from "./useAxiosPrivate"

const useFetchDataPrivate = () => {
	const [data, setData] = useState(null)
	const axiosPrivate = useAxiosPrivate()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosPrivate.get(url)
				setData(response.data)
			} catch (error) {
				toast.error("failed to fetch requested data")
				console.log(error)
			}
		}
		fetchData()
	}, [url])

	return data
}

export default useFetchDataPrivate
