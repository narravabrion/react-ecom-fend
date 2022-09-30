import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const RequireAuth = () => {
	// get accessToken token
	console.log("requireAuth")
	const { accessToken } = useSelector((state)=>state.user)
	console.log(accessToken)
	const location = useLocation()
	return accessToken ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	)
}

export default RequireAuth
