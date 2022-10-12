import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../features/user/userActions"
import { FaPaintBrush } from "react-icons/fa"
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { accessToken } = useSelector((state) => state.user)
	const [open, setOpen] = useState(false)
	const [searchBar, setSearchBar] = useState(false)
	const [changeNav, setChangeNav] = useState(false)

	const handleNavbar = () => {
		if (window.scrollY >= 80) {
			setChangeNav(true)
		} else {
			setChangeNav(false)
		}
	}

	const handleLogout = async () => {
		try {
			console.log("logging out")
			await dispatch(logout())
			navigate("/", { replace: true })
		} catch (error) {
			console.log(error)
		}
	}
	window.addEventListener("scroll", handleNavbar)
	return (
		<>
			<nav
				className={`flex w-full fixed top-0 z-10 justify-between items-center p-2 bg-fuchsia-700 text-white ${
					changeNav
						? "top-0 rounded-b"
						: "md:top-10 md:w-11/12  md:rounded md:px-4"
				} md:shadow-lg max-w-7xl transition-all duration-200 ease-in-out`}
			>
				<h1 className=' '>
					<FaPaintBrush size={40} />
				</h1>
				<button className='md:hidden' onClick={() => setOpen(!open)}>
					{open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</button>
				<div
					className={`absolute  bg-fuchsia-700 w-full left-0 py-4 px-4 flex flex-col font-medium transition-all duration-200 ease-in  md:static md:flex-row md:justify-end ${
						open ? "top-14" : "-top-96"
					}`}
				>
					<Link
						to='/'
						onClick={() => setOpen(!open)}
						className='py-2 md:pl-4 hover:text-black'
					>
						Home
					</Link>
					<Link
						to='/cart'
						onClick={() => setOpen(!open)}
						className='py-2 md:pl-4 hover:text-black'
					>
						Cart
					</Link>
					<Link
						to='/contact'
						onClick={() => setOpen(!open)}
						className='py-2 md:pl-4 hover:text-black'
					>
						Contact
					</Link>
					{accessToken ? (
						<button
							className='py-2 md:pl-4 hover:text-black flex '
							onClick={handleLogout}
						>
							Logout
						</button>
					) : (
						<Link
							to='/login'
							onClick={() => setOpen(!open)}
							className='py-2 md:pl-4 hover:text-black flex'
						>
							Login
						</Link>
					)}
					<button
						className='py-2 md:pl-4 hover:text-black'
						onClick={() => {
							setSearchBar(!searchBar)
						}}
					>
						<AiOutlineSearch size={20} />
					</button>
					<div
						className={`absolute -bottom-6 m-0  left-0 right-0 bg-fuchsia-300 text-black transition-all duration-200 ease-in rounded-b ${
							searchBar ? "block" : "hidden"
						}`}
					>
						<input
							type='search'
							className={`appearance-none relative  w-full h-8 m:h-10 outline-none bg-transparent p-2 rounded-b`}
							placeholder='Search '
						/>
						<AiOutlineClose
							onClick={() => {
								setSearchBar(!searchBar)
							}}
							className='text-black absolute right-2 top-2'
						/>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
