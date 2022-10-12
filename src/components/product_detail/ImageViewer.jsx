import React from "react"

const ImageViewer = () => {
	return (
		<>
			<div className='w-full p-4 mt-16 shadow overflow-hidden md:mt-0 md:shadow-none'>
				<img
					src='https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
					alt=''
					className='w-full h-56 sm:h-64 object-cover'
				/>
			</div>
		</>
	)
}

export default ImageViewer
