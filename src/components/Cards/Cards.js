import { Link } from 'react-router-dom'
import './Cards.scss'

const Cards = () => {
	const cards = ['Basic', 'Executive', 'Suite']

	return (
		<div className='cards'>
			<div className='cards__container'>
				{cards.map((name) => (
					<div key={name} className='cards__item'>
						<h3 className='cards__title'>- {name} -</h3>
						<span className='cards__bar'></span>
						<p className='cards__btc'>1 BTC</p>
						<p className='cards__text'>- 3 Days -</p>
						<p className='cards__text'>- Views -</p>
						<p className='cards__text'>- Featured -</p>
						<p className='cards__text'>- Private Quarters -</p>
						<Link to='/contact' className='btn cards__btn'>Book</Link>
					</div>
				))}

			</div>

		</div>
	)
}

export default Cards