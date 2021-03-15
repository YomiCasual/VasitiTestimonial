import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import PopImage from '../assets/images/pop2.png'

const ThankYou = () => {
	return (
		<div className='container'>
				<div className='testimonial'>
		<div className="center">
            <div className="icon">
               <img src={PopImage} classname="popImage"  alt="celebrate" />
            </div>
			<Typography className="header" variant='h5' gutterBottom>
				Thank you for sharing your story!
			</Typography>
			<Typography variant='body2' style={{ color: '#4A4A4A'}} gutterBottom>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</Typography>
			<Link to="/">
				<Button className="button" style={{marginTop: "2rem"}} variant='contained'>Close</Button>
			</Link>
		</div>
		</div>
		</div>
	);
};

export default ThankYou;
