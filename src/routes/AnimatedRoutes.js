import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Pricing from './Pricing'
import Training from './Training'
import Contact from './Contact'

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/training' element={<Training />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes