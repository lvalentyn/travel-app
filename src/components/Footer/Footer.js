/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebook, FaLinkedin, FaPhone, FaMailBulk, FaSearchLocation, FaTwitter } from 'react-icons/fa'

import './Footer.scss'


const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='footer__left'>
					<div className='footer__contact'>
						<FaSearchLocation style={{ marginRight: '2rem' }} />
						<div className='footer__address'>
							<p>123 Acme st.</p>
							<p>Houston, Tx</p>
						</div>
					</div>
					<a href='tel:+18001231234' className='footer__contact' aria-label='phone'>
						<FaPhone style={{ marginRight: '2rem' }} /> 1-800-123-1234
					</a>
					<a href='mailto:galaxy@travel.com' className='footer__contact'>
						<FaMailBulk style={{ marginRight: '2rem' }} /> galaxy@travel.com
					</a>

				</div>

				<div className='footer__right'>
					<h3>About the company</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
					<div className='footer__social'>
						<a href="#">
							<FaFacebook size={40} style={{ marginRight: '1.5rem' }} />
						</a>
						<a href="#"><FaLinkedin size={40} style={{ marginRight: '1.5rem' }} /></a>
						<a href="#"><FaTwitter size={40} /></a>


					</div>
				</div>

			</div>
		</div>
	)
}

export default Footer