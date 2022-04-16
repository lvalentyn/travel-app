import './HeroImg.scss'

const HeroImg = (props) => {
	return (
		<div className='hero-img'>
			<div className='hero-img__bg'>
				<img src={props.img} alt='bg' />
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