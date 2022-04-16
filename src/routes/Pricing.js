import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer/Footer"

const Pricing = () => {
	return (
		<div>
			<Navbar />
			<HeroImg heading='PRICING' text='Choose your trip' />
			<Cards />
			<Footer />
		</div>
	)
}

export default Pricing