import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import Loader from "../Loader"
import { refresh } from "../../features/user/userActions"

const PersistLogin = () => {
	const location = useLocation()
	const { accessToken,loading } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		const verifyRefresh = async () => {
			const response = await dispatch(refresh())
			if (refresh.rejected.match(response)) {
				toast.info("please login again!")
				;<Navigate to='/login' state={{ from: location }} replace />
			}
		}

		let isMounted = true
		if (!accessToken) {
			isMounted && verifyRefresh()
		}
		return () => (isMounted = false)
	}, [dispatch, accessToken])

	return loading ? (
		<Loader />
	) : accessToken ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	)
}

export default PersistLogin
