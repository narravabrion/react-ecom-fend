import React from "react"
import { Formik, Form } from "formik"
import { FaPaintBrush } from "react-icons/fa"
import TextInput from "./TextInput"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { register } from "../features/user/userActions"
import RegistrationSchema from "../validation/registration.validation"

const RegistrationForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<>
			<div className='shadow bg-white rounded-sm w-11/12 max-w-md px-4 py-4'>
				<h1 className='w-full flex items-center justify-center p-2 mb-5 text-fuchsia-700'>
					<Link to='/'>
						<FaPaintBrush size={44} />
					</Link>
				</h1>
				<Formik
					initialValues={{
						email: "",
						username: "",
						password: "",
						// confirmPassword: "",
					}}
					validationSchema={RegistrationSchema}
					onSubmit={async (values, { setSubmitting }) => {
						const response = await dispatch(register(values))
						if (register.fulfilled.match(response)) {
							navigate("/login", { replace: true })
						}
						setSubmitting(false)
					}}
				>
					<Form>
						<TextInput
							label='Username'
							name='username'
							type='text'
							placeholder='username'
						/>
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
						<TextInput
							label='Confirm Password'
							name='confirmPassword'
							type='password'
							placeholder='confirm password'
						/>
						<button
							className='w-full flex items-center justify-center p-1 rounded bg-fuchsia-600 text-white mt-4 font-semibold hover:opacity-95'
							type='submit'
						>
							Submit
						</button>
						<div className='w-full'>
							<p className='w-full text-center py-3 text-sm italic'>
								already have an account?{" "}
								<Link
									to='/login'
									className='font-medium not-italic text-fuchsia-700 underline'
								>
									Login
								</Link>
							</p>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default RegistrationForm
