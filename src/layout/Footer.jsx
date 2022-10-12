import React from "react"
import {
	AiOutlineHeart,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineYoutube,
} from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"
import NewsLetter from "../components/NewsLetter"

const Footer = () => {
	return (
		<>
			<footer className='w-full  text-white flex items-center justify-center'>
				<div className='w-full  bg-black flex items-center justify-center max-w-[1920px]'>
					<div className=' w-full  max-w-7xl flex flex-col items-center justify-center'>
						<div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:py-12'>
							<NewsLetter />
							<div className='w-full p-4 md:pl-28'>
								<h4 className='text-xl font-bold uppercase'>Quick Links</h4>
								<div className='flex flex-col text-sm py-3 text-gray-500 '>
									<Link to='' className='hover:text-fuchsia-700'>
										T&C
									</Link>
									<Link to='' className='hover:text-fuchsia-700'>
										Privacy Policy
									</Link>
									<Link to='' className='hover:text-fuchsia-700'>
										Legal
									</Link>
								</div>
							</div>

							<div className='w-full p-4 '>
								<h4 className='text-xl font-bold uppercase'>Follow Us</h4>
								<p className='text-gray-500 py-3'>Lets Us be Social</p>
								<div className='flex items-center text-gray-300 '>
									<a href=' '>
										<FaFacebookF className='mr-6 md:mr-0 hover:text-fuchsia-700' />
									</a>
									<a href=' '>
										<AiOutlineTwitter className='mr-6 md:mr-0 hover:text-fuchsia-700' />
									</a>
									<a href=' '>
										<AiOutlineYoutube className='mr-6 md:mr-0 hover:text-fuchsia-700' />
									</a>
									<a href=' '>
										<AiOutlineInstagram className='mr-6 md:mr-0 hover:text-fuchsia-700' />
									</a>
								</div>
							</div>
						</div>
						<div className='  w-11/12 md:w-full text-center mt-4 p-2 border-t border-t-gray-500 flex items-center justify-center text-gray-400'>
							&copy; {new Date().getFullYear()} All Rights reserved | ArtStore{" "}
							<AiOutlineHeart size={19} className='text-fuchsia-700 ml-1' />
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
