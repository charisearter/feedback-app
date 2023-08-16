import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== 0 && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters long');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>How would you rate this page? </h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>

					<Button type='submit' disabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}
export default FeedbackForm;
