import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer/Footer"
import heroImg from '../assets/heroImg.jpg'

import { motion } from "framer-motion"

const Pricing = () => {
	return (
		<motion.div
			initial={{ opacity: 0, transition: { duration: .4 } }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: .4 } }}
		>
			<Navbar />
			<HeroImg heading='PRICING' text='Choose your trip' img={heroImg} />
			<Cards />
			<Footer />
		</motion.div>
	)
}

export default Pricing