import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from "./components/Loader"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Error404 = lazy(() => import("./pages/Error404"))
const Login = lazy(() => import("./pages/Login"))
const RequireAuth = lazy(() => import("./components/auth/RequireAuth"))
const PersistLogin = lazy(()=>import("./components/auth/PersistLogin"))

function App() {
	return (
		<>
			<Router>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route element={<PersistLogin />}>
							<Route element={<RequireAuth />}>
								<Route path='/' element={<Home />} />
							</Route>
						</Route>
						<Route path='/about' element={<About />} />
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</Suspense>
			</Router>
		</>
	)
}

export default App
