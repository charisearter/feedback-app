import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item: { rating, text, id }, handleDelete }) {
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button className='close' onClick={() => handleDelete(id)}>
				<FaTimes color='blueviolet' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
