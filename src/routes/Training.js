import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Info from "../components/Info/Info"
import Footer from "../components/Footer/Footer"
import heroImg from '../assets/heroImg.jpg'

const Training = () => {
	return (
		<div>
			<Navbar />
			<HeroImg heading='Training' text='Pre-Flight & In-Flight Training' img={heroImg} />
			<Info />
			<Footer />
		</div>
	)
}

export default Training