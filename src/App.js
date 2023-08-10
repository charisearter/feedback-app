import { Fragment, useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<Fragment>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} />
			</div>
		</Fragment>
	);
};

export default App;
