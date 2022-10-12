import React from "react"
import ContactCard from "../components/contact/ContactCard"
import Header from "../components/contact/Header"

const ContactPage = () => {
	return (
		<>
			<div className='w-full  h-full flex flex-col items-center max-w-[1536px] '>
				<Header />
				<div className='w-full max-w-7xl'>
					<ContactCard />
				</div>
			</div>
		</>
	)
}

export default ContactPage
