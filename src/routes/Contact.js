import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Form from "../components/Form/Form"
import Footer from "../components/Footer/Footer"
import heroImg from '../assets/heroImg.jpg'

const Contact = () => {
	return (
		<div>
			<Navbar />
			<HeroImg heading='CONTACT' text='Contact us for more info!' img={heroImg} />
			<Form />
			<Footer />
		</div>
	)
}

export default Contact