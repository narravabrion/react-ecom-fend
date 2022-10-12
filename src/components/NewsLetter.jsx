import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"

const NewsLetter = () => {
	return (
		<>
			<section className='w-full p-4'>
				<h4 className='text-xl font-bold uppercase'>Newsletter</h4>
				<p className='text-gray-500 py-3'>Keep in touch with our latest deals!</p>
				<div className='relative mt-1'>
					<input type='text' name='' id='' className='px-4 py-2 text-sm w-full h-full' placeholder="ENTER YOUR EMAIL" />
					<button className='absolute right-0 top-0 bottom-0 bg-fuchsia-700  w-8 flex items-center justify-center'>
						<AiOutlineArrowRight className="" size={20}/>
					</button>
				</div>
			</section>
		</>
	)
}

export default NewsLetter
