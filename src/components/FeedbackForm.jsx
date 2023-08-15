import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
	const [text, setText] = useState('');

	const handleTextChange = (e) => {
		setText(e.target.value);
	};
	return (
		<Card>
			<form>
				<h2>How would you rate this page? </h2>
				{/* TODO: Rating slect component */}
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					{/* Change button to own customizable component later */}
					<Button type='submit'>Send</Button>
				</div>
			</form>
		</Card>
	);
}
export default FeedbackForm;
