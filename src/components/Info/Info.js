import pod from '../../assets/pod.jpg'
import moon from '../../assets/moon.jpg'

import { Link } from 'react-router-dom'

import './Info.scss'


const Info = () => {
	return (
		<div className='info'>
			<div className='info__left'>
				<h2 className='info__title'>Training</h2>
				<p className='info__descr'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum</p>
				<Link to='/contact' className='info__btn btn'>Contact</Link>
			</div>
			<div className='info__right'>
				<div className='info__img-box'>
					<div className='info__img'>
						<img src={moon} alt='moon' />
					</div>
					<div className='info__img'>
						<img src={pod} alt='pod' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info