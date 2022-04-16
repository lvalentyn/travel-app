import './Form.scss'

const Form = () => {
	return (
		<div className='form'>
			<form className='form__container'>
				<label className='form__name'>Your Name
					<input className='form__input' type='text' /></label>
				<label className='form__name'>Email
					<input className='form__input' type='email' />
				</label>
				<label className='form__name'>Subject
					<input className='form__input' type='text' /></label>
				<label className='form__name'>Details
					<textarea className='form__input' rows='6' placeholder='Type a short message here' />
				</label>
				<button className='btn form__btn'>Submit</button>
			</form>
		</div>
	)
}

export default Form