import React from "react"
import { Formik, Form } from "formik"
import { FaPaintBrush } from "react-icons/fa"
import LoginSchema from "../validation/login.validation"
import TextInput from "./TextInput"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { login } from "../features/user/userActions"

const LoginForm = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()
	const from = location.state?.from?.pathname || "/"
	
	return (
		<>
			<div className='shadow bg-white rounded-sm w-11/12 max-w-md px-4 py-4'>
				<h1 className='w-full flex items-center justify-center p-2 mb-5 text-fuchsia-700'>
					<FaPaintBrush size={44} />
				</h1>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					validationSchema={LoginSchema}
					onSubmit={async (values, { setSubmitting }) => {
						const response = await dispatch(login(values))
						if (login.fulfilled.match(response)) {
							navigate(from, { replace: true })
						}
						setSubmitting(false)
					}}
				>
					<Form>
						<TextInput
							label='Email'
							name='email'
							type='text'
							placeholder='email'
						/>
						<TextInput
							label='Password'
							name='password'
							type='password'
							placeholder='password'
						/>
						<button
							className='w-full flex items-center justify-center p-1 rounded bg-fuchsia-600 text-white mt-4 font-semibold hover:opacity-95'
							type='submit'
						>
							Submit
						</button>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default LoginForm
