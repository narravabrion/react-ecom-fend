import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import Loader from "../Loader"
import { refresh } from "../../features/user/userActions"

const PersistLogin = () => {
	const location = useLocation()
	const { accessToken } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let isMounted = true
		const verifyRefresh = async () => {
			try {
				
				await dispatch(refresh())
			} catch (error) {
				toast.info("please log in again")
			} finally {
				isMounted && setLoading(false)
			}
		}

		!accessToken && isMounted ? verifyRefresh() : setLoading(false);
		return () => (isMounted = false)
	}, [loading])

	return loading ? (
		<Loader />
	) : accessToken ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	)
}

export default PersistLogin
