/* eslint-disable jsx-a11y/alt-text */
import './HeroImg.scss'

import heroImg from '../../assets/heroImg.jpg'


const HeroImg = (props) => {
	return (
		<div className='hero-img'>
			<div className='hero-img__bg'>
				<img src={heroImg} />
			</div>
			<div className='hero-img__head'>
				<h2 className='hero-img__title'>
					{props.heading}
				</h2>
				<p className='hero-img__descr'>
					{props.text}
				</p>
			</div>
		</div>
	)
}

export default HeroImg