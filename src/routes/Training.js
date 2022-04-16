import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Info from "../components/Info/Info"
import Footer from "../components/Footer/Footer"
import heroImg from '../assets/heroImg.jpg'
import { motion } from "framer-motion"

const Training = () => {
	return (
		<motion.div
			initial={{ opacity: 0, transition: { duration: .4 } }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: .4 } }}
		>
			<Navbar />
			<HeroImg heading='Training' text='Pre-Flight & In-Flight Training' img={heroImg} />
			<Info />
			<Footer />
		</motion.div>
	)
}

export default Training