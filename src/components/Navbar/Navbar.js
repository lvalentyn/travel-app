import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.scss'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const [color, setColor] = useState(false)

	const changeColor = () => {
		(window.scrollY >= 100) ? setColor(true) : setColor(false)
	}

	window.addEventListener('scroll', changeColor)

	return (
		<div className={`navbar ${color ? 'sticky' : ''}`}>
			<Link to='/'><h1 className='navbar__title'>TRAVEL</h1></Link>
			<ul className={`navbar__menu ${click ? 'active' : ''}`}>
				<li className='navbar__el'>
					<Link to='/' className='navbar__link'>Home</Link>
				</li>
				<li className='navbar__el'>
					<Link to='/pricing' className='navbar__link'>Pricing</Link>
				</li>
				<li className='navbar__el'>
					<Link to='/training' className='navbar__link'>Training</Link>
				</li>
				<li className='navbar__el'>
					<Link to='/contact' className='navbar__link'>Contact</Link>
				</li>
			</ul>
			<div className='navbar__hamburger' onClick={handleClick}>
				{click ? (<FaTimes size={20} />) : (<FaBars size={20} />)}
			</div>
		</div>
	)
}

export default Navbar