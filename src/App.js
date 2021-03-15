import { Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import TestimonialForm from './components/TestimonialForm';
import ThankYou from './components/ThankYou';
import './App.css';

const App = () => {
	return (
		<>
			<Route exact path='/' component={Homepage} />
			<Route exact path='/testimonialForm' component={TestimonialForm} />
			<Route exact path='/submitTestimonial' component={ThankYou} />
		</>
	);
};

export default App;
