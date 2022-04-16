import Navbar from "../components/Navbar/Navbar"
import Video from "../components/Video/Video"
import Footer from "../components/Footer/Footer"
import { motion } from "framer-motion"

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0, transition: { duration: .4 } }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: .4 } }}
		>
			<Navbar />
			<Video />
			<Footer />
		</motion.div>
	)
}

export default Home