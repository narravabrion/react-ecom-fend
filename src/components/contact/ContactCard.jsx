import React from "react"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import ContactForm from "./ContactForm"

const ContactCard = () => {
	return (
		<>
			<section className='w-full p-4 md:flex md:gap-10'>
				<article className=''>
					<div className='flex items-center py-4'>
						<GoLocation className="text-fuchsia-700 mr-5" size={25} />
						<div className=''>
							<h3 className='font-bold text-lg '> Mara, Wakanda Forever</h3>
							<p className='text-sm text-gray-500'>Shaka Zulu Street</p>
						</div>
					</div>
					<div className='flex items-center py-2'>
						<AiOutlinePhone className="text-fuchsia-700 mr-5" size={25} />
						<div className=''>
							<h3 className='font-bold text-lg '>+ 254 700 111 222</h3>
							<p className='text-sm text-gray-500'>Mon to Fri 9am to 5 pm</p>
						</div>
					</div>
					<div className='flex items-center py-4'>
						<AiOutlineMail className="text-fuchsia-700 mr-5" size={25} />
						<div className=''>
							<h3 className='font-bold text-lg '>info@artstore.com</h3>
							<p className='text-sm text-gray-500'>Send us your query anytime!</p>
						</div>
					</div>
				</article>
				<ContactForm />
			</section>
		</>
	)
}

export default ContactCard
