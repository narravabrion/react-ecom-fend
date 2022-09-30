import * as Yup from "yup"

const LoginSchema = Yup.object({
	email: Yup.string().required("email is required").email("email is invalid"),
	password: Yup.string().required("password is required")
})

export default LoginSchema
