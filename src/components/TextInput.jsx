import { useField } from "formik"

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<>
			<div className='w-full  my-1'>
				<label className='block text-xs  text-gray-500' htmlFor={props.id || props.name}>
					{label}
				</label>
				<input className='border-b w-full outline-none ' {...field} {...props} />
				{meta.touched && meta.error ? (
					<div className='text-xs text-red-600 italic font-sans'>{meta.error}</div>
				) : null}
			</div>
		</>
	)
}

export default TextInput
