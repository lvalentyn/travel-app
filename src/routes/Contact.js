import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Form from "../components/Form/Form"
import Footer from "../components/Footer/Footer"
import heroImg from '../assets/heroImg.jpg'
import { motion } from "framer-motion"

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0, transition: { duration: .4 } }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: .4 } }}
		>
			<Navbar />
			<HeroImg heading='CONTACT' text='Contact us for more info!' img={heroImg} />
			<Form />
			<Footer />
		</motion.div>
	)
}

export default Contact