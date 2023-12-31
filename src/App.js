import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
				<Route path='/'>
					<FeedbackForm handleAdd={addFeedback} />
					<FeedbackStats feedback={feedback} />
					<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
				</Route>
					<Route path='/about' element={<AboutPage />} />
					</Routes>
			</div>
		</Router>
	);
};

export default App;
