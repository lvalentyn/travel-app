import './Video.scss'

import spaceVideo from '../../assets/space.mp4'
import { Link } from 'react-router-dom'

const Video = () => {
	return (
		<div className='video'>
			<video className='video__container' autoPlay loop muted id='video' >
				<source src={spaceVideo} type='video/mp4' />
			</video>
			<div className='video__content'>
				<h2 className='video__title'>Galaxy Travel</h2>
				<p className='video__subtitle'>World's first civilian space travel</p>
				<div className='video__btn-box'>
					<Link to='/training' className='btn video__btn'>Training</Link>
					<Link to='/contact' className='btn btn--light video__btn'>Launch</Link>
				</div>
			</div>
		</div>
	)
}

export default Video