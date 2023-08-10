import Card from './shared/Card';
function FeedbackItem({ item: { rating, text } }) {
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</Card>
	);
}

export default FeedbackItem;
