import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { axiosPrivate } from "../api/axiosInstance"
import {refresh } from "../features/user/userActions"
// import useRefreshToken from "./useRefreshToken"

const useAxiosPrivate = () => {
	const { accessToken } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${accessToken}`
				}
				return config
			},
			(error) => {
				return Promise.reject(error)
			}
		)

		const responseInterceptor = axiosPrivate.interceptors.response.use(
			(response) => {
				return response
			},
			async (error) => {
				console.log(error)
				const previousRequest = error?.config
				if (error?.response.status == 403 && !previousRequest.sent) {
					previousRequest = true
					const access = await dispatch(refresh)
					previousRequest.headers["Authorization"] = `Bearer ${access}`
					return axiosPrivate(previousRequest)
				}
				return Promise.reject(error)
			}
		)

		return () => {
			axiosPrivate.interceptors.request.eject(requestInterceptor)
			axiosPrivate.interceptors.response.eject(responseInterceptor)
		}
	}, [refresh])
	return axiosPrivate
}

export default useAxiosPrivate
