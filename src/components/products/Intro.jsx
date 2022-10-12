import React from "react"
import { useSearchParams } from "react-router-dom"

const Intro = () => {
	const [searchParams] = useSearchParams()
	const query = searchParams.get("name")
	return (
		<>
			<section className='w-full h-64 md:h-96 bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 p-4'>
				<div className='w-full h-full flex flex-col items-center justify-center'>
					<h2 className='text-3xl text-white font-bold capitalize'>
						{query} Art
					</h2>
				</div>
			</section>
		</>
	)
}

export default Intro

