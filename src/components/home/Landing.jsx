import React from "react"
import { BsFillCartPlusFill } from "react-icons/bs"

const Landing = () => {
	return (
		<>
			<section className='w-full h-screen flex items-center justify-center bg-center bg-cover  bg-[url("https://res.cloudinary.com/codex-llc/image/upload/v1664703287/artstore/banner-artstore_j9nmcy.png")]'>
				<div className='w-full max-w-7xl h-full flex items-center p-3'>
					<div className='w-full md:flex md:items-center md:justify-evenly md:px-8'>
						<article className=''>
							<h2 className='font-bold text-3xl text-gray-800 uppercase sm:text-5xl sm:w-96 md:w-auto sm:font-extrabold'>
								Twin bird painting{" "}
							</h2>
							<p className='my-4 py-2 text-gray-700 text-sm sm:w-96 lg:w-[36rem]'>
								Hail to thee, blithe Spirit! Bird thou never wert. That from
								Heaven, or near it, Pourest thy full heart in profuse strains of
								unpremeditated art.
							</p>
							<div className='flex items-center'>
								<button className='shadow-lg w-11 h-11 flex items-center justify-center p-1 text-white bg-fuchsia-700 rounded-full transition-all duration-200 ease-in-out hover:bg-fuchsia-300 hover:text-fuchsia-700'>
									<BsFillCartPlusFill size={20} />
								</button>
								<p className='px-2 font-medium'> Add to cart</p>
							</div>
						</article>
						<img
							src='https://res.cloudinary.com/codex-llc/image/upload/v1664906504/artstore/banner-2-update_wc7kyt.png'
							alt=''
							className='object-cover invisible md:visible '
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Landing
