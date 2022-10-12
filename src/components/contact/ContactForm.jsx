import React from "react"

const ContactForm = () => {
	return (
		<>
			<form className='w-full mt-5 sm:flex sm:gap-4 md:gap-10'>
				<div className='w-full '>
					<div className='flex flex-wrap -mx-3 mb-6 sm:mb-0'>
						<div className='w-full px-3 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='name'
							>
								Name
							</label>
							<input
								className='appearance-none block w-full  border-gray-300 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='name'
								type='text'
								placeholder='John Doe'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-6 sm:mb-0'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='email'
							>
								E-mail
							</label>
							<input
								className='appearance-none block w-full  border-gray-300 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='email'
								type='email'
								placeholder='johndoe@mail.com'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-6 sm:mb-0'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='subject'
							>
								Subject
							</label>
							<input
								className='appearance-none block w-full  border-gray-300 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='subject'
								type='text'
								placeholder='Email Subject'
							/>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<div className='flex flex-wrap -mx-3 mb-6 sm:mb-0'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='message'
							>
								Message
							</label>
							<textarea
								className=' no-resize appearance-none block w-full  border-gray-300 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 sm:h-52 resize-none'
								id='message'
							></textarea>
						</div>
					</div>
					<div className='flex items-center justify-end'>
						<button
							className=' bg-fuchsia-700  focus:outline-none text-white font-bold py-2.5 px-4 '
							type='button'
						>
							Send Message
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default ContactForm
