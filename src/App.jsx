import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from "./components/Loader"
import LayOut from "./layout/LayOut"

const HomePage = lazy(() => import("./pages/HomePage"))
const ProductInventoryPage = lazy(() => import("./pages/ProductInventoryPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const ProductsPage = lazy(() => import("./pages/ProductsPage"))
const CartPage = lazy(() => import("./pages/CartPage"))
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"))
const About = lazy(() => import("./pages/About"))
const Error404 = lazy(() => import("./pages/Error404"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage = lazy(() => import("./pages/RegisterPage"))
const RequireAuth = lazy(() => import("./components/auth/RequireAuth"))
const PersistLogin = lazy(() => import("./components/auth/PersistLogin"))

function App() {
	return (
		<>
			<Router>
				<Suspense fallback={<Loader />}>
					{/* <Navbar /> */}
					<Routes>
						<Route element={<LayOut />}>
							<Route path='/' element={<HomePage />} />
							<Route path='/products' element={<ProductsPage />} />
							<Route path='/products/inventory' element={<ProductInventoryPage />} />
							<Route path='/contact' element={<ContactPage />} />
							<Route path='/product/:slug' element={<ProductDetailPage />} />
							<Route path='/cart' element={<CartPage />} />
						</Route>
						<Route element={<PersistLogin />}>
							<Route element={<RequireAuth />}></Route>
						</Route>
						<Route path='/about' element={<About />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</Suspense>
			</Router>
		</>
	)
}

export default App
